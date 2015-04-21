/**
 * @file 矩形
 * @author ielgnaw(wuji0223@gmail.com)
 */

define(function (require) {

    var util = require('./util');
    var DisplayObject = require('./DisplayObject');

    /**
     * 矩形
     *
     * @param {Object} opts 参数对象
     *
     * @return {Object} Rectangle 实例
     */
    function Rectangle(opts) {
        DisplayObject.call(this, opts);

        this.cX = this.x + this.width / 2;
        this.cY = this.y + this.height / 2;

        this.generatePoints();
        this.getBounds();

        return this;
    }

    Rectangle.prototype = {
        /**
         * 还原 constructor
         */
        constructor: Rectangle,

        /**
         * 生成 points
         *
         * @return {Object} Rectangle 实例
         */
        generatePoints: function () {
            this.points = [
                {
                    x: this.x,
                    y: this.y
                },
                {
                    x: this.x + this.width,
                    y: this.y
                },
                {
                    x: this.x + this.width,
                    y: this.y + this.height
                },
                {
                    x: this.x,
                    y: this.y + this.height
                }
            ];

            for (var i = 0, len = this.points.length; i < len; i++) {
                var transformPoint = this.matrix.transformPoint(this.points[i].x, this.points[i].y);
                this.points[i] = {
                    x: transformPoint.x,
                    y: transformPoint.y
                };
            }
            this.originalPoints = util.extend(true, [], this.points);
            return this;
        },

        /**
         * 创建路径，只是创建路径，并没有画出来
         *
         * @param {Object} offCtx 离屏 canvas 2d context 对象
         *
         * @return {Object} Rectangle 实例
         */
        createPath: function (offCtx) {
            var points = this.points;
            var len = points.length;
            if (!len) {
                return;
            }

            offCtx.beginPath();
            offCtx.moveTo(points[0].x, points[0].y);
            for (var i = 0; i < len; i++) {
                offCtx.lineTo(points[i].x, points[i].y);
            }
            offCtx.closePath();
            return this;
        },

        /**
         * 移动一步，重写了父类的 moveStep
         *
         * @return {Object} Rectangle 实例
         */
        moveStep: function () {
            // console.warn(1);
            this.vX += this.aX;
            this.vX *= this.frictionX;
            this.x += this.vX;

            this.vY += this.aY;
            this.vY *= this.frictionY;
            this.y += this.vY;

            this.generatePoints();
            this.getBounds();

            return this;
        },

        /**
         * 渲染当前 Rectangle 实例
         *
         * @param {Object} offCtx 离屏 canvas 2d context 对象
         *
         * @return {Object} 当前 Rectangle 实例
         */
        render: function (offCtx) {
            offCtx.save();
            offCtx.fillStyle = this.fillStyle;
            offCtx.strokeStyle = this.strokeStyle;
            offCtx.globalAlpha = this.alpha;

            this.matrix.reset();
            this.matrix.translate(this.cX, this.cY);
            this.matrix.rotate(this.angle);
            this.matrix.scale(this.scaleX, this.scaleY);
            this.matrix.translate(-this.cX, -this.cY);

            // var m = this.matrix.m;
            // offCtx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);

            // for (var i = 0, len = this.points.length; i < len; i++) {
            //     this.points[i] = {
            //         x: this.matrix.transformPoint(this.originalPoints[i].x, this.originalPoints[i].y).x,
            //         y: this.matrix.transformPoint(this.originalPoints[i].x, this.originalPoints[i].y).y
            //     };
            // }

            this.generatePoints();
            this.getBounds();
            this.createPath(offCtx);

            offCtx.fill();
            offCtx.stroke();

            this.debugRender(offCtx);

            offCtx.restore();
            return this;
        },

        /**
         * 最大最小顶点法来获取边界盒
         *
         * @return {Object} Rectangle 实例
         */
        getBounds: function () {
            var points = this.points;

            var minX = Number.MAX_VALUE;
            var maxX = Number.MIN_VALUE;
            var minY = Number.MAX_VALUE;
            var maxY = Number.MIN_VALUE;

            for (var i = 0, len = points.length; i < len; i++) {
                if (points[i].x < minX) {
                    minX = points[i].x;
                }
                if (points[i].x > maxX) {
                    maxX = points[i].x;
                }
                if (points[i].y < minY) {
                    minY = points[i].y;
                }
                if (points[i].y > maxY) {
                    maxY = points[i].y;
                }
            }

            this.bounds = {
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY
            };

            return this;
        },

        /**
         * 判断点是否在多边形内
         * 由于在游戏里，大部分都是贴图，形状只是用来辅助的
         * 因此这里忽略了 isPointInPath 方法获取 lineWidth 上的点的问题
         * 小游戏就简单使用 cnavas context 的 isPointInPath 方法
         *
         * @param {Object} offCtx 离屏 canvas 2d context 对象
         * @param {number} x 横坐标
         * @param {number} y 纵坐标
         *
         * @return {boolean} 结果
         */
        isPointInPath: function (offCtx, x, y) {
            this.createPath(offCtx);
            return offCtx.isPointInPath(x, y);
        },

        /**
         * 某个点是否和当前 DisplayObject 实例相交，这个方法应该是由子类重写的
         *
         * @override
         *
         * @param {number} x 点的横坐标
         * @param {number} y 点的纵坐标
         *
         * @return {boolean} 是否相交
         */
        hitTestPoint: function (x, y) {
            var stage = this.stageOwner;
            return this.isPointInPath(stage.offCtx, x, y);
        },

        /**
         * debug 时渲染边界盒，多边形使用最大最小顶点法来渲染边界盒
         * 碰撞时，根据此边界盒判断
         *
         * @param {Object} offCtx 离屏 canvas 2d context 对象
         */
        debugRender: function (offCtx) {
            if (this.debug) {
                offCtx.save();
                // offCtx.strokeStyle = 'black';
                offCtx.strokeStyle = 'green';
                offCtx.strokeRect(
                    this.bounds.x,
                    this.bounds.y,
                    this.bounds.width,
                    this.bounds.height
                );
                offCtx.restore();
            }
        }
    };

    util.inherits(Rectangle, DisplayObject);

    return Rectangle;
});