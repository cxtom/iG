/**
 * @file 粒子发射器
 * @author cxtom (cxtom2010@gmail.com)
 */

'use strict';
/* eslint-disable */
define(function (require) {

    var util = require('../util');
    var Vector = require('../Vector');
    var Particle = require('./Particle');


    /**
     * 发射器构造函数
     * @param {Object}   options     配置
     * @param {Function} createShape 创建例子的函数
     */
    function Emitter(options, createShape) {
        util.extend(true, this, {
            max: 1000,
            amount: 15,
            life: null,
            position: null,
            velocity: null,
            _particlePool: []
        }, options);

        this._particlePool = [];

        for (var i = 0; i < this.max; i++) {
            var particle = new Particle(options);
            particle.emitter = this;
            particle.shape = createShape();
            this._particlePool.push(particle);
        }
    }


    Emitter.prototype = {

        /**
         * 初始化粒子
         * @param  {Function} createShape 创建例子的函数
         * @return {Emitter}  this
         */
        init: function (createShape) {
            for (var i = 0; i < this.max; i++) {
                var particle = new Particle(options);
                particle.emitter = this;
                particle.shape = createShape();
                this._particlePool.push(particle);
            }

            return this;
        },

        emit: function (out) {
            var amount = Math.min(this._particlePool.length, this.amount);

            for (var i = 0; i < amount; i++) {
                var particle = this._particlePool.pop();
                if (this.position) {
                    particle.setPosition(this.position);
                }
                if (this.velocity) {
                    particle.setVelocity(this.velocity);
                }
                if (this.life) {
                    particle.life = this.life;
                }

                particle.age = 0;

                out.push(particle);
            }
        },

        kill: function (particle) {
            this._particlePool.push(particle);
        }
    };

    return Emitter;

});
