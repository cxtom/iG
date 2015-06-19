/**
 * @file 粒子基类
 * @author cxtom (cxtom2010@gmail.com)
 */

'use strict';

define(function (require) {

    var util = require('../util');
    var Vector = require('../Vector');


    /**
     * Particle 基类
     *
     * @constructor
     *
     * @param {Object} opts 参数
     *
     * @return {Object} Particle 实例
     */
    function Particle(opts) {

        this.position = new Vector();
        this.velocity = new Vector();

        util.extend(true, this, {
            life: 1,
            age: 0,
            shape: null
        });

        return this;
    }

    Particle.prototype = {

        /**
         * 设置速度
         * @param {Object} v 速度
         * @param {number} v.x 速度x分量
         * @param {number} v.y 速度y分量
         *
         * @return {Particle} this
         */
        setVelocity: function (v) {
            this.velocity.x = v.x;
            this.velocity.y = v.y;

            return this;
        },

        setPosition: function (pos) {
            this.position.x = pos.x;
            this.position.y = pos.y;
        },

        update: function (dt) {
            if (this.velocity) {
                this.velocity.scaleAndAdd(this.position, this.position, this.velocity, dt);
            }
        }
    };

    return Particle;

});
