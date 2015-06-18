/**
 * @file 位图精灵（矩形），这个精灵承载一个静态的图片
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

define(function (require) {

    var util = require('./util');
    var Rectangle = require('./Rectangle');

    /**
     * Bitmap 基类
     *
     * @extends DisplayObject
     * @constructor
     *
     * @param {Object} opts 参数
     *
     * @return {Object} Bitmap 实例
     */
    function Bitmap(opts) {
        opts = opts || {};
        if (!opts.image) {
            throw new Error('Bitmap must be require a image param');
        }

        Rectangle.call(this, opts);

        util.extend(true, this, {
            width: 0,
            height: 0,

            // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            // 这四个参数对应 drawImage 的 sx, sy, sWidth, sHeight
            sx: 0,
            sy: 0,
            sWidth: 0,
            sHeight: 0,

            // 是否使用缓存
            useCache: true
        }, opts);

        return this;
    }

    Bitmap.prototype = {
        /**
         * 还原 constructor
         */
        constructor: Bitmap,

        /**
         * 初始化缓存 canvas
         *
         * @return {Object} Text 实例
         */
        initCacheCanvas: function () {
            if (!this.cacheCanvas) {
                this.cacheCanvas = document.createElement('canvas');
                this.cacheCtx = this.cacheCanvas.getContext('2d');
            }
            this.cacheCanvas.width = this.width;
            this.cacheCanvas.height = this.height;
            this.cache();
            return this;
        },

        /**
         * 缓存，把需要重复绘制的画面数据进行缓存起来，减少调用 canvas API 的消耗
         *
         * @return {Object} Text 实例
         */
        cache: function () {
            this.cacheCtx.save();
            this.cacheCtx.drawImage(
                this.asset,
                this.sx, this.sy, this.sWidth, this.sHeight,
                0, 0, this.cacheCanvas.width, this.cacheCanvas.height
            );
            this.cacheCtx.restore();
            return this;
        },

        /**
         * 渲染当前 Bitmap 实例
         *
         * @param {Object} ctx canvas 2d context 对象
         *
         * @return {Object} 当前 Bitmap 实例
         */
        render: function (ctx) {
            // console.warn(2);
            ctx.save();

            _setInitDimension.call(this);

            Bitmap.superClass.render.apply(this, arguments);
            this.matrix.setCtxTransform(ctx);

            if (this.useCache) {
                if (!this._.execCache) {
                    this._.execCache = true;
                    this.initCacheCanvas();
                }
                ctx.drawImage(this.cacheCanvas, this.x, this.y);
            }
            else {
                ctx.drawImage(
                    this.asset,
                    this.sx, this.sy, this.sWidth, this.sHeight,
                    this.x, this.y, this.width, this.height
                );
            }

            ctx.restore();

            return this;
        }
    };

    /**
     * 设置 Bitmap 实例的 width, height
     * 由于在实例化 Bitmap 的时候，图片资源还没有加载完成
     * 只有在 render 的时候才能获取到图片的 asset，这个时候去设置当前 Bitmap 实例的 width 等
     */
    function _setInitDimension() {
        if (!this._.isInitDimension) {
            this._.isInitDimension = true;
            if (this.width === 0) {
                this.width = this.asset.width;
            }

            if (this.sWidth === 0) {
                this.sWidth = this.asset.width;
            }

            if (this.height === 0) {
                this.height = this.asset.height;
            }

            if (this.sHeight === 0) {
                this.sHeight = this.asset.height;
            }
        }
    }

    util.inherits(Bitmap, Rectangle);

    return Bitmap;

});
