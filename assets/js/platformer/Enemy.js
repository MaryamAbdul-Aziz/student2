import Character from './Character.js';
import GameEnv from './GameEnv.js';

export class Enemy extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, speedRatio, enemyData){
        super(canvas, 
            image, 
            speedRatio,
            enemyData.width, 
            enemyData.height, 
        );
        this.destruction = 0;

        // Player Data is required for Animations
        this.enemyData = enemyData;

        this.spriteScale = 1;

        //Initial Position of Goomba
        this.x = .60 * GameEnv.innerWidth;
    }

    update() {
        // Check if the enemy is at the left or right boundary
        if (this.x <= 0 || this.x + this.width >= GameEnv.innerWidth) {
            // Change direction by reversing the speed
            this.speed = -this.speed;
        }

        //Randomly change when the Goomba changes position
        if (Math.random() < 0.006) {
            this.speed = Math.random() < 0.5 ? -this.speed : this.speed;
        }

        //Randomly turn Goomba into God Mode
        if (Math.random() < 0.01) {
            this.performGoombaSpecial();
        }

        //Initially get the enemy moving
        this.x += this.speed;
        
        //detect if the goomba is dead
        if (this.destruction === 1) {
            this.destroy();
        }
    }
    
    performGoombaSpecial() {
        if (!this.specialActionActive) {
            // Temporary increase in speed
            const originalSpeed = this.speed;
            this.speed *= 4; // You can adjust the multiplier based on your game's design

            //Change the styling and scale of the enemy
            this.canvas.style.transform = 'scaleX(-1)';
            this.canvas.style.filter = 'invert(1)';
            this.canvas.style.transform = 'scale(1.5)';


            // Set a timeout to revert the speed to the original value after a certain duration
            setTimeout(() => {
                this.speed = originalSpeed;
                this.canvas.style.transform = 'scaleX(1)';
                this.canvas.style.filter = 'invert(0)';
                this.canvas.style.transform = 'scale(1)';

                this.specialActionActive = false; // Reset the flag after the timeout
            }, 3000);
            
            // Set the flag to indicate that the special action is active
            this.specialActionActive = true;
        }
    }


    /* murder() {
        let i = 1;
        let intervalId = setInterval(() => {
            if (i >= 0) {
                canvas.style.transform = `scale(1, ${i.toFixed(1)})`;
                console.log("Death " + i.toFixed(1));
                i -= 0.1;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
    } */
    
}


export default Enemy