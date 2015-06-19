/**
 * @file 粒子效果
 * @author cxtom (cxtom2010@gmail.com)
 */

define(function (require) {

    var Vector = require('../Vector');

    function ForceField(x, y) {
        x = x || 0;
        y = y || x || 0;
        this.force = new Vector(x, y);
    }

    ForceField.prototype.applyTo = function (velocity, position, weight, deltaTime) {
        velocity.scaleAndAdd(velocity, velocity, this.force, deltaTime);
    };

    function BoxCollision(rect) {
        this.rect = rect || [[0, 0], [100, 100]];
    }

    BoxCollision.prototype.applyTo = function (velocity, position, weight, deltaTime) {
        var rect = this.rect;
        var min = rect[0];
        var max = rect[1];

        if (position.x < min[0] || position.x > max[0]) {
            velocity.x = -velocity.x * 0.6;
        }
        if (position.y < min[1] || position.y > max[1]) {
            velocity.y = -velocity.y * 0.6;
        }
    };

    function RepulsiveField(center, k) {
        this.center = center;
        this.k = k;
    }

    RepulsiveField.prototype.applyTo = function (velocity, position, weight, deltaTime) {
        var v = position.sub(this.center, true);
        var l = v.getMagnitude();
        var k = this.k;
        var f = k / l;
        Vector.scaleAndAdd(velocity, velocity, v, f / l);
    };

    function ParticleEffect() {

        this._particles = [];
        this._effectors = [];
        this._emitters = [];
        this._elapsedTime = 0;
        this._emitting = true;

        return this;
    }

    ParticleEffect.prototype = {

        addEmitter: function (emitter) {
            this._emitters.push(emitter);

            return this;
        },

        addEffector: function (effector) {
            this._effectors.push(effector);

            return this;
        },

        update: function (deltaTime) {

            var i;
            // MS => Seconds
            deltaTime /= 1000;
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
        }
    };

    ParticleEffect.ForceField = ForceField;
    ParticleEffect.BoxCollision = BoxCollision;
    ParticleEffect.RepulsiveField = RepulsiveField;

    return ParticleEffect;
});
