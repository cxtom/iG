/**
 * @file 向量
 * @author ielgnaw(wuji0223@gmail.com)
 */

'use strict';

define(function (require) {

    var sqrt = Math.sqrt;
    var pow = Math.pow;

    /**
     * 向量
     *
     * @param {number} x 向量的 x 分量
     * @param {number} y 向量的 y 分量
     *
     * @constructor
     */
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y === 0 ? 0 : y || x || 0;
    }

    Vector.prototype = {
        constructor: Vector,

        /**
         * 标准化，将向量转化为一个单位向量即将向量长度转化为一个单位
         *
         * @return {Object} 当前向量实例
         */
        normalize: function () {
            var m = this.getMagnitude();
            if (m !== 0) {
                this.x /= m;
                this.y /= m;
            }
            return this;
        },

        /**
         * 获取向量大小
         *
         * @return {number} 大小值
         */
        getMagnitude: function () {
            return sqrt(pow(this.x, 2) + pow(this.y, 2));
        },

        /**
         * 向量相加
         *
         * @param {Object} other 待加向量
         * @param {boolean} isNew 是否需要返回一个新的向量
         *
         * @return {Object} 当前向量实例或者新的向量
         */
        add: function (other, isNew) {
            var x = this.x + other.x;
            var y = this.y + other.y;

            if (isNew) {
                return new Vector(x, y);
            }

            this.x = x;
            this.y = y;

            return this;
        },

        /**
         * 向量相减
         *
         * @param {Object} other 待减向量
         * @param {boolean} isNew 是否需要返回一个新的向量
         *
         * @return {Object} 当前向量实例或者新的向量
         */
        sub: function (other, isNew) {
            var x = this.x - other.x;
            var y = this.y - other.y;

            if (isNew) {
                return new Vector(x, y);
            }

            this.x = x;
            this.y = y;

            return this;
        },

        /**
         * 当前向量和另一个向量的点积
         *
         * @param {Object} other 另一个向量
         *
         * @return {number} 点积
         */
        dot: function (other) {
            return this.x * other.x + this.y * other.y;
        },

        /**
         * 边向量
         *
         * @param {Object} other 另一个向量
         *
         * @return {Object} 新的向量
         */
        edge: function (other) {
            return this.sub(other, true);
        },

        /**
         * 得到与当前 Vector 实例垂直的向量
         *
         * @param {boolean} isNew 是否需要返回一个新的向量
         *
         * @return {Object} 当前向量实例或者新的向量
         */
        perpendicular: function (isNew) {
            var x = -this.x;
            var y = this.y;
            if (isNew) {
                return new Vector(x, y);
            }

            this.x = x;
            this.y = y;

            return this;
        },

        /**
         * 获取法向量，这是一个垂直于当前向量实例的单位向量
         *
         * @return {Object} 垂直于当前向量实例的单位向量
         */
        normal: function () {
            return this.perpendicular(true).normalize();
        },

        /**
         * 向量向某个方向缩放
         * @param  {Vector} b     缩放方向
         * @param  {number} scale 范围
         * @return {Vector}       out
         */
        scaleAndAdd: function (b, scale) {
            this.x = this.x + (b.x * scale);
            this.y = this.y + (b.y * scale);
            return this;
        }
    };

    return Vector;
});
