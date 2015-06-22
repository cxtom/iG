/**
 * @file 粒子效果
 * @author cxtom (cxtom2010@gmail.com)
 */

define(function (require) {

    var Vector = require('../Vector');
    var u = require('../util');

    function Effect() {}

    Effect.prototype.applyTo = function (velocity, position, weight, deltaTime) {

    };

    function ForceField(opts) {
        var x = opts.x || 0;
        var y = opts.y || opts.x || 0;
        this.force = new Vector(x, y);
    }

    ForceField.prototype = {
        $class: 'ForceField',

        applyTo: function (velocity, position, weight, deltaTime) {
            velocity.scaleAndAdd(this.force, deltaTime);
        }
    };

    u.inherits(ForceField, Effect);

    function BoxCollision(opts) {
        this.rect = opts.rect || [[0, 0], [100, 100]];
        this.k = opts.k || 0.6;
    }

    BoxCollision.prototype = {
        $class: 'BoxCollision',

        applyTo: function (velocity, position, weight, deltaTime) {
            var rect = this.rect;
            var min = rect[0];
            var max = rect[1];

            if ((position.x < min[0] && velocity.x <= 0)
                || (position.x > max[0] && velocity.x > 0)) {
                velocity.x = -velocity.x * this.k;
            }
            if ((position.y < min[1] && velocity.y <= 0)
                || (position.y > max[1] && velocity.y > 0)) {
                velocity.y = -velocity.y * this.k;
            }
        }
    };

    u.inherits(BoxCollision, Effect);

    function RepulsiveField(opts) {
        this.center = opts.center;
        this.k = opts.k;
    }

    RepulsiveField.prototype = {
        $class: 'RepulsiveField',

        applyTo: function (velocity, position, weight, deltaTime) {
            var v = position.sub(this.center, true);
            var l = v.getMagnitude();
            var k = this.k;
            var f = k / l;
            velocity.scaleAndAdd(v, f / l);
        }
    };

    u.inherits(RepulsiveField, Effect);

    function ParticleSystem() {

        this._particles = [];
        this._effectors = [];
        this._emitters = [];
        this._elapsedTime = 0;
        this._emitting = true;

        return this;
    }

    ParticleSystem.prototype = {

        addEmitter: function (emitter) {
            this._emitters.push(emitter);

            return this;
        },

        addEffector: function (conf) {
            var effector;
            if (conf instanceof Effect) {
                effector = conf;
            }
            // 如果是一个对象, 那按这个格式来解析
            // {type: 'EffectClassName', options: { ... }}
            else if (u.isType('object', conf)) {
                var EffectClass = u.getClass(Effect, conf.type);
                var options = conf.options || {};
                effector = new EffectClass(options);
            }

            if (effector) {
                this._effectors.push(effector);
            }

            return this;
        },

        update: function (deltaTime) {

            var i;
            this._elapsedTime += deltaTime;

            var particles = this._particles;

            if (this._emitting) {
                for (i = 0; i < this._emitters.length; i++) {
                    this._emitters[i].emit(particles);
                }
                if (this.oneshot) {
                    this._emitting = false;
                }
            }

            var shapeList = [];
            // Aging
            var len = particles.length;

            var p;
            for (i = 0; i < len;) {
                p = particles[i];
                p.age += deltaTime;
                if (p.age >= p.life) {
                    p.emitter.kill(p);
                    particles[i] = particles[len - 1];
                    particles.pop();
                    len--;
                }
                else {
                    shapeList.push(p.shape);
                    i++;
                }
            }

            for (i = 0; i < len; i++) {
                // Update
                p = particles[i];
                if (this._effectors.length > 0) {
                    for (var j = 0; j < this._effectors.length; j++) {
                        this._effectors[j].applyTo(p.velocity, p.position, p.weight, deltaTime);
                    }
                }
                p.update(deltaTime);

                var shape = p.shape;
                if (shape) {
                    shape.x = p.position.x;
                    shape.y = p.position.y;
                }
            }

            return particles;
        },

        dispose: function () {
            this._particles = [];
            this._effectors = [];
            this._emitters = [];
            this._elapsedTime = 0;
        }
    };

    return ParticleSystem;
});
