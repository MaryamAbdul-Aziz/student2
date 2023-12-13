import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Thing1 extends GameObject {
    constructor(canvas, image) {
        super(canvas, image, 0);
        // Set the initial position and size
        this.size();
    }
    /*
    collisionAction() {
            if (this.collisionData.touchPoints.other.id === "player") {
                // Collision with the left side of the Tub
                if (this.collisionData.touchPoints.other.left) {
                    this.touchCoin = true;
                    console.log("coin left")
                    this.destroy();
                    //window.location.reload();
                }
                // Collision with the right side of the Tube
                if (this.collisionData.touchPoints.other.right) {
                    console.log("coin right")
                    this.touchCoin = true;
                    this.destroy();
                    //window.location.reload();
                }
            }    
        }
    */
    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        // Save the current transformation matrix
        this.ctx.save();

        // Rotate the canvas 90 degrees to the left
        this.ctx.rotate(-Math.PI / 2);

        // Draw the image at the rotated position (swap x and y)
        this.ctx.drawImage(this.image, -this.image.height, 0);

        // Restore the original transformation matrix
        this.ctx.restore();
    }

    // Center and set Thing1 position with adjustable height and width
    size() {
        // Make the image 10 times smaller
        const scaledWidth = this.image.width * 0.2;
        const scaledHeight = this.image.height * 0.169;

        // Center the object on the screen
        const randomPosition = Math.random() < 0.5; // Randomly choose between two positions

        let thingX, thingY;

        if (randomPosition) {
            thingX = (GameEnv.innerWidth - scaledWidth) / 2.5;
            thingY = (GameEnv.innerHeight - scaledHeight) / 1.01;
        } else {
            thingX = (GameEnv.innerWidth - scaledWidth) / 7.5;
            thingY = (GameEnv.innerHeight - scaledHeight) / 2.02;
        }

        // Set variables used in Display and Collision algorithms
        this.bottom = thingY + scaledHeight;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;

        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${thingX}px`;
        this.canvas.style.top = `${thingY}px`;
    }

   
    }

export default Thing1;