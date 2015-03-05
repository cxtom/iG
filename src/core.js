/**
 * @file 核心
 * @author ielgnaw(wuji0223@gmail.com)
 */

(function (root, ig, undefined) {

    /**
     * requestAnimationFrame polyfill
     */
    root.requestAnimFrame = (function () {
        return root.requestAnimationFrame
            || root.webkitRequestAnimationFrame
            || root.mozRequestAnimationFrame
            || root.msRequestAnimationFrame
            || root.oRequestAnimationFrame
            || function (callback, elem) {
                    var me = this;
                    var start;
                    var finish;
                    root.setTimeout(function () {
                        start = +new Date();
                        callback(start);
                        finish = +new Date();
                        me.timeout = 1000 / 60 - (finish - start);
                    }, me.timeout);
                };
    })();

    /**
     * cancelAnimationFrame polyfill
     */
    root.cancelAnimFrame = (function () {
        return root.cancelAnimationFrame
                || root.webkitCancelAnimationFrame
                || root.webkitCancelRequestAnimationFrame
                || root.mozCancelAnimationFrame
                || root.mozCancelRequestAnimationFrame
                || root.msCancelAnimationFrame
                || root.msCancelRequestAnimationFrame
                || root.oCancelAnimationFrame
                || root.oCancelRequestAnimationFrame
                || root.clearTimeout;
    })();

    ig.noop = function () {};

    /**
     * 为类型构造器建立继承关系
     *
     * @param {Function} subClass 子类构造器
     * @param {Function} superClass 父类构造器
     * @return {Function} 返回 subClass 构造器
     */
    ig.inherits = function (subClass, superClass) {
        ig.noop.prototype = superClass.prototype;
        var subProto = subClass.prototype;
        var proto = subClass.prototype = new ig.noop();

        for (var key in subProto) {
            proto[key] = subProto[key];
        }

        subClass.prototype.constructor = subClass;
        subClass.superClass = superClass.prototype;

        return subClass;
    };

    /**
     * 根据角度计算弧度
     * 弧度 = 角度 * Math.PI / 180
     *
     * @param {number} deg 角度值
     *
     * @return {number} 弧度值
     */
    ig.deg2Rad = function (deg) {
        return deg * Math.PI / 180;
    };

    /**
     * 根据弧度计算角度
     * 角度 = 弧度 * 180 / Math.PI
     *
     * @param {number} rad 弧度值
     *
     * @return {number} 角度值
     */
    ig.rad2Deg = function (rad) {
        return rad * 180 / Math.PI;
    };

    /**
     * 把页面上的鼠标坐标换成相对于 canvas 的坐标
     *
     * @param {HTML.Element} canvas canvas 元素
     * @param {number} x 相对于页面的横坐标
     * @param {number} y 相对于页面的纵坐标
     *
     * @return {Object} 相对于 canvas 的坐标对象
     */
    ig.window2Canvas = function (canvas, x, y) {
        var boundRect = canvas.getBoundingClientRect();
        return {
            x: Math.round(x - boundRect.left * (canvas.width / boundRect.width)),
            y: Math.round(y - boundRect.top * (canvas.height / boundRect.height))
        };
    };

})(root || this, ig || {});
