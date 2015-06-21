/**
 * @file 粒子发射器
 * @author cxtom (cxtom2010@gmail.com)
 */

'use strict';

define(function (require) {

    var util = require('../util');
    var Particle = require('./Particle');
    var Vector = require('../Vector');

    // 私有函数
    var scale = {
        setPosition: function (option, particle) {
            if (util.isType('object', option)
                && option.hasOwnProperty('type')
                && option.hasOwnProperty('value')
            ) {
                switch (option.type) {
                    case 'point':
                        if (option.value instanceof Vector) {
                            particle.setPosition(option.value);
                            break;
                        }
                    // 矩形范围
                    case 'rectangle':
                        if (util.isType('array', option.value)) {
                            var min = option.value[0];
                            var max = option.value[1];
                            particle.setPosition(new Vector(
                                util.randomFloat(min[0] || 0, max[0] || 0),
                                util.randomFloat(min[1] || 0, max[1] || 0)
                            ));
                            break;
                        }
                    // 圆形范围
                    case 'circle':
                        if (option.value.hasOwnProperty('center')
                            && option.value.hasOwnProperty('radius')
                            && option.value.center instanceof Vector
                            && util.isType('number', option.value.radius)
                        ) {
                            var r = option.value.radius;
                            var v = new Vector(
                                util.randomFloat(-r, r),
                                util.randomFloat(-r, r)
                            );
                            particle.setPosition(v.scaleAndAdd(option.value.center, 1));
                            break;
                        }
                    default:
                        particle.setPosition(new Vector());
                }
            }
            else if (util.isType('function', option)) {
                option(particle);
            }
            else if (option instanceof Vector) {
                particle.setPosition(option);
            }
            else {
                particle.setPosition(new Vector());
            }
        },
        setVelocity: function (option, particle) {
            if (option instanceof Vector) {
                particle.setVelocity(option);
            }
            else if (option instanceof Array) {
                var min = option[0];
                var max = option[1];
                particle.setVelocity(new Vector(
                    util.randomFloat(min[0] || 0, max[0] || 0),
                    util.randomFloat(min[1] || 0, max[1] || 0)
                ));
            }
            else if (util.isType('function', option)) {
                option(particle);
            }
            else {
                particle.setVelocity(new Vector());
            }
        },
        setAccelerate: function (option, particle) {
            if (option instanceof Vector) {
                particle.setAccelerate(option);
            }
            else if (option instanceof Array) {
                var min = option[0];
                var max = option[1];
                particle.setAccelerate(new Vector(
                    util.randomFloat(min[0] || 0, max[0] || 0),
                    util.randomFloat(min[1] || 0, max[1] || 0)
                ));
            }
            else if (util.isType('function', option)) {
                option(particle);
            }
            else {
                particle.setAccelerate(new Vector());
            }
        }
    };


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
            accelerate: null,
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
            for (var i = 0; i < this._particlePool.length; i++) {
                this._particlePool[i].shape = createShape();
                this._particlePool.push(this._particlePool[i]);
            }

            return this;
        },

        emit: function (out) {
            var amount = Math.min(this._particlePool.length, this.amount);

            for (var i = 0; i < amount; i++) {
                var particle = this._particlePool.pop();
                if (this.position) {
                    scale.setPosition(this.position, particle);
                }
                if (this.velocity) {
                    scale.setVelocity(this.velocity, particle);
                }
                if (this.accelerate) {
                    scale.setAccelerate(this.accelerate, particle);
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
