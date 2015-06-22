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
    canvas.width  = 800;
    var ctx = canvas.getContext('2d');

    function createCircle() {
        var circle = new Circle({
            x: 10,
            y: 30,
            vx: 10,
            vy: 0,
            ax: 0,
            ay: 0,
            radius: 2,
            ctx: ctx
        });
        circle.draw();

        return circle;
    }

    var Emitter        = ig.particle.Emitter;
    var ParticleSystem = ig.particle.ParticleSystem;

    var emitter;
    var parcsys;
    var particles;

    document.querySelector('#simple').onclick = function () {

        emitter = new Emitter({
            max: 40,
            amount: 1,
            life: 1,
            position: new ig.Vector(10, 30),
            velocity: new ig.Vector(500, 0)
        }, createCircle);

        parcsys = new ParticleSystem();
        parcsys.addEmitter(emitter);

        ig.loop({
            step: function (dt, stepCount, requestID) {
                particles = parcsys.update(dt * 18);
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                for (var i = 0; i < particles.length; i++) {
                    particles[i].shape.draw();
                }
            },
            jumpFrames: 0
        });
    };

    document.querySelector('#acc').onclick = function () {

        emitter = new Emitter({
            max: 1000,
            amount: 15,
            life: 1500,
            position: {
                type: 'rectangle',
                value: [[0, 0], [800, 0]]
            },
            velocity: [[0, 1], [0, 2]],
            accelerate: ig.Vector(0, 0.5)
        }, createCircle);

        parcsys = new ParticleSystem();
        parcsys.addEmitter(emitter);

        parcsys
            .addEffector({
                type: 'RepulsiveField',
                options: {
                    center: new ig.Vector(200, 200),
                    k: 5
                }
            })
            .addEffector({
                type: 'RepulsiveField',
                options: {
                    center: new ig.Vector(600, 200),
                    k: -5
                }
            })
            .addEffector({
                type: 'BoxCollision',
                options: {
                    rect: [[0, 0], [800, 400]],
                    k: 0.6
                }
            });

        ig.loop({
            step: function (dt, stepCount, requestID) {
                // if (stepCount % 10 === 0) {
                particles = parcsys.update(dt);
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                for (var i = 0; i < particles.length; i++) {
                    particles[i].shape.draw();
                }

                var circle1 = new Circle({
                    x: 200,
                    y: 200,
                    radius: 5,
                    ctx: ctx
                });
                circle1.draw();

                var circle2 = new Circle({
                    x: 600,
                    y: 200,
                    radius: 5,
                    ctx: ctx
                });
                circle2.draw();
                // console.log(particles[0].age);
               // }
            },
            jumpFrames: 0
        });
    };
};
