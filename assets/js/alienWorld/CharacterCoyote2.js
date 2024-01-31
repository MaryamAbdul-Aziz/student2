import Character from './Character.js';
import GameObject from './GameObject.js';
import GameEnv from './GameEnv.js';
import CharacterMonkey from './CharacterMonkey.js';

const CoyoteAnimation = {
    // Sprite properties
    scale: 0.30,
    width: 85,
    height: 165,
    scene1: { row: 0, frames: 4 },
    scene2: { row: 1, frames: 4 }
}

export class CharacterCoyote extends Character {
    constructor(canvas, image, speedRatio) {
        super(
            canvas,
            image,
            speedRatio,
            CoyoteAnimation.width,
            CoyoteAnimation.height,
            CoyoteAnimation.scale
        );
        this.delay = 0;
        this.collidedWithFloor = false;
    }
     // Function to initialize the canvas
     initializeCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
    }

    // Perform a unique update
    update() {
        // Slower animation
        if (this.delay === 3) {
            this.delay = 0;
            // Perform super update actions (collision checks)
            super.update();
        } else {
            this.delay++;
        }
    }

    size() {
        super.size();
        if (!GameEnv.prevInnerWidth) {
            this.setY(GameEnv.top);
        }
    }

    // Override default GameObject action
    floorAction() {
        // Decrement the score when a collision with the floor occurs
        if (!this.collidedWithFloor) {
            GameEnv.decrementScore(1); // Adjust the decrement value as needed
            GameEnv.updateScoreDisplay(); // Update the score display
            this.collidedWithFloor = true; // Mark the collision to prevent further decrements
        }

        const object = this;
        const canvas = this.canvas;
        const duration = 1000; // Adjust the duration as needed
        let startTime = null;

        function spiral(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }

            const elapsed = timestamp - startTime;
            if (elapsed < duration) {
                const progress = elapsed / duration;

                // Adjust opacity based on the progress
                canvas.style.opacity = 1 - progress;

                // Rotate the canvas
                const rotationAngle = progress * (Math.random() * 2880); // Adjust the rotation speed as needed
                canvas.style.transform = `rotate(${rotationAngle}deg`;

                requestAnimationFrame(spiral); // continue the animation loop
            } else {
                object.destroy(); // remove object from the game
                // Now, spawn new coyotes when a coyote is destroyed
                spawnNewCoyote();
            }
        }

        // Start the animation
        requestAnimationFrame(spiral);
    }

}
// Can add specific initialization parameters for the dog here
// In this case the dog is following the default character initialization
export function initCoyote(canvasId, image, speedRatio) {
        // Get the canvas element for coyotes by ID
        const canvas = document.getElementById('characters');
    // Create the Dog character
    var coyote = new CharacterCoyote(canvasId, image, speedRatio);

    // Set initial Animation
    coyote.setFrameY(CoyoteAnimation.scene1.row);
    coyote.setMaxFrame(CoyoteAnimation.scene1.frames);

    // Dog Object
    return coyote;
}

// Create an array to store the coyotes in the game
const coyotes = [];

// Function to periodically spawn new coyotes
export function spawnNewCoyote() {
    console.log("Checking for spawning new coyotes");
    // Check if all coyotes are destroyed
    const allCoyotesDestroyed = coyotes.every(coyote => coyote.isDestroyed());
    console.log("All coyotes destroyed:", allCoyotesDestroyed);

    // If all coyotes are destroyed, spawn a new one
    if (allCoyotesDestroyed) {
        console.log("Spawning a new coyote");
        // Create a new CharacterCoyote instance and add it to the array
        const newCoyote = initCoyote(/* parameters for the new coyote */);
        coyotes.push(newCoyote);
    }
}

export default CharacterCoyote;
