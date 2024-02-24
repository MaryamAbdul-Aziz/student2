import GameEnv from './GameEnv.js';
import Background from './Background.js';

export class BackgroundClouds extends Background {
    constructor(canvas, image, data) {
        super(canvas, image, data);
    }

    // speed is used to background parallax behavior
    update() {
        this.speed = GameEnv.backgroundCloudsSpeed;
        super.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.draw();
    }

}

export default BackgroundClouds;