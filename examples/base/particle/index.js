'use strict';

/* global ig */

window.onload = function () {
    function Circle(opts) {
        this.x = opts.x;
        this.y = opts.y;
        this.vx = opts.vx;
        this.vy = opts.vy;
        this.ax = opts.ax;
        this.ay = opts.ay;
        this.radius = opts.radius;
        this.ctx = opts.ctx;
    }

    Circle.prototype.draw = function () {
        // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.fill();
    };

    Circle.prototype.step = function (dt) {
        this.vx += this.ax * dt;
        this.vy += this.ay * dt;

        // 60 fps 即每秒 60 帧，每帧移动一个单位距离，那么每秒移动 60 个单位距离，那么每毫秒移动 60/1000 个单位距离
        this.x += this.vx * dt;
        this.y += this.vy * dt;

        if (this.x - this.radius <= 0 || this.x + this.radius >= this.ctx.canvas.width) {
            this.vx = -this.vx;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= this.ctx.canvas.height) {
            this.vy = -this.vy;
        }
    };

    var canvas = document.querySelector('canvas');
    canvas.height = 400;
    canvas.width  = 500;
    var ctx = canvas.getContext('2d');

    function createCircle() {
        var circle = new Circle({
            x: 10,
            y: 30,
            vx: 10,
            vy: 0,
            ax: 0,
            ay: 0,
            radius: 5,
            ctx: ctx
        });
        circle.draw();

        return circle;
    }

    var Emitter        = ig.particle.Emitter;
    var ParticleEffect = ig.particle.ParticleEffect;

    var emitter = new Emitter({
        max: 40,
        amount: 1,
        life: 1,
        position: new ig.Vector(10, 30),
        velocity: new ig.Vector(500, 400)
    }, createCircle);

    var parcsys = new ParticleEffect();
    parcsys.addEmitter(emitter);

    var ForceField = ParticleEffect.ForceField;
    // parcsys.addEffector(new ForceField(new ig.Vector(0, 300)));

    document.querySelector('#simple').onclick = function () {
        var particles;
        ig.loop({
            step: function (dt, stepCount, requestID) {
                particles = parcsys.update(dt * 18);
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                for (var i = 0; i < particles.length; i++) {
                    particles[i].shape.draw();
                    // console.log({x: particles[i].shape.x, y: particles[i].shape.y});
                }
            },
            exec: function (execCount) {

            },
            jumpFrames: 0
        });
    };
};
