---
toc: true
title: Dog Sprite Sheet Animation
layout: post
description: Sprite Sheet Animation using dog sprite
type: hacks
courses: { compsci: {week: 5} }
---

<body>
    <div>
        <canvas id="spriteContainer"> <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
            <img id="dogSprite" src="/student/images/dogSprites.png">  // change sprite here
        </canvas>
        <div id="controls"> <!--basic radio buttons which can be used to check whether each individual animaiton works -->
            <input type="radio" name="animation" id="idle" checked>
            <label for="idle">Idle</label><br>
            <input type="radio" name="animation" id="barking">
            <label for="barking">Barking</label><br>
            <input type="radio" name="animation" id="walking">
            <label for="walking">Walking</label><br>
        </div>
    </div>
</body>

<script>
    // start on page load
    window.addEventListener('load', function () {
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 160;  // matches sprite pixel width
        const SPRITE_HEIGHT = 144; // matches sprite pixel height
        const SCALE_FACTOR = 2;  // control size of sprite on canvas
        const FRAME_LIMIT = 48;  // number of frames per row, this code assume each row is same
        // const FRAME_RATE = 15;  // not used

        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        class Dog {
            constructor() {
                this.image = document.getElementById("dogSprite");
                this.spriteWidth = SPRITE_WIDTH;
                this.spriteHeight = SPRITE_HEIGHT;
                this.width = this.spriteWidth;
                this.height = this.spriteHeight;
                this.x = 0;
                this.y = 0;
                this.scale = SCALE_FACTOR;
                this.minFrame = 0;
                this.maxFrame = FRAME_LIMIT;
                this.frameX = 0;
                this.frameY = 0;
            }

            // draw dog object
            draw(context) {
                context.drawImage(
                    this.image,
                    this.frameX * this.spriteWidth,
                    this.frameY * this.spriteHeight,
                    this.spriteWidth,
                    this.spriteHeight,
                    this.x,
                    this.y,
                    this.width * this.scale,
                    this.height * this.scale
                );
            }

            // update frameX of object
            update() {
                if (this.frameX < this.maxFrame) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
            }
        }

        // dog object
        const dog = new Dog();

        // update frameY of dog object, action from idle, bark, walk radio control
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT') {
                const selectedAnimation = event.target.id;
                switch (selectedAnimation) {
                    case 'idle':
                        dog.frameY = 0;
                        break;
                    case 'barking':
                        dog.frameY = 1;
                        break;
                    case 'walking':
                        dog.frameY = 2;
                        break;
                    default:
                        break;
                }
            }
        });

        // Animation recursive control function
        function animate() {
            // Clears the canvas to remove the previous frame.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draws the current frame of the sprite.
            dog.draw(ctx);

            // Updates the `frameX` property to prepare for the next frame in the sprite sheet.
            dog.update();

            // Uses `requestAnimationFrame` to synchronize the animation loop with the display's refresh rate,
            // ensuring smooth visuals.
            requestAnimationFrame(animate);
        }

        // run 1st animate
        animate();
    });
</script>