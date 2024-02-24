import Character from './Character.js';
import GameEnv from './GameEnv.js';
import {playGoombaDeath} from './Audio.js';

export class FlyingGoomba extends Character {
  
    // constructors sets up Character object 
    constructor(canvas, image, data, xPercentage, yPercentage, name, minPosition){
        super(canvas, image, data);

        //Unused but must be defined
        this.name = name;
        this.yPercentage = yPercentage;

        //Initial Position of Goomba
        this.x = xPercentage * GameEnv.innerWidth;
        this.y = 0.4 * GameEnv.innerHeight;
        
        //Access in which a Goomba can travel
        this.minPosition = minPosition * GameEnv.innerWidth;
        this.maxPosition = this.x + xPercentage * GameEnv.innerWidth;

        this.immune = 0;

        //Define Speed of Enemy
        if (GameEnv.difficulty === "normal") {
            this.speed = this.speed;
        } else {
            this.speed = this.speed * 2;
        }
    }

    dropGoomba() {
      let playerX = GameEnv.PlayerPosition.playerX;
      let playerY = GameEnv.PlayerPosition.playerY;

      // Drop the Goomba on the Player when relatively close
      if (Math.abs(this.x - playerX) < 150 && this.y !== playerY) {
        //Move Goomba towards Player
        this.y = followPlayer(this.y, playerY, 0.03);
      } else {
        //Move Goomba towards Sky
        this.y = followPlayer(this.y, 0.4 * GameEnv.innerHeight, 0.02);
      }
    }

    update() {
        super.update();

        if (this.x <= this.minPosition || (this.x + this.canvasWidth >= this.maxPosition) || this.x > (GameEnv.innerWidth - 100) ) {
            this.speed = -this.speed;
        }

        this.dropGoomba();

        // Every so often change direction
        if (Math.random() < 0.005) {
            this.speed = Math.random() < 0.5 ? -this.speed : this.speed;
        }

        //Chance for Goomba to turn Gold
        if (["normal","hard"].includes(GameEnv.difficulty)) {
            if (Math.random() < 0.00001) {
                this.canvas.style.filter = 'brightness(1000%)';
                this.immune = 1;
            }
        }
        
        //Immunize Goomba & Texture It
        if (GameEnv.difficulty === "hard") {
                this.canvas.style.filter = "invert(100%)";
                this.canvas.style.scale = 1.25;
                this.immune = 1;
        } else if (GameEnv.difficulty === "impossible") {
                this.canvas.style.filter = 'brightness(1000%)';
                this.canvas.style.transform = "rotate(180deg)"
                this.immune = 1;
        }

        // Move the enemy
        this.x -= this.speed;
    }

    // Player action on collisions
    collisionAction() {
        if (this.collisionData.touchPoints.other.id === "tube") {
            if (this.collisionData.touchPoints.other.left || this.collisionData.touchPoints.other.right) {
                this.speed = -this.speed;            
            }
        }

        // Collides with the wall
        if (this.collisionData.touchPoints.other.id === "jumpPlatform") {
            if (this.collisionData.touchPoints.other.left || this.collisionData.touchPoints.other.right) {
                this.speed = -this.speed;            
            }
        }
        /* There's a issue with the current collision detection as of 2/15/2024, where if you are
        colliding with mutiple objects at the same time it refuses to collide at all or mixes all the
        collisions together. This causes the flying Goomba on the "Space" level to be able to walk
        through the wall regardless of the above line of code. Do not bother trying to fix it as it would
        require a lot of reworks.
        */

        // Player collission code
        if (this.collisionData.touchPoints.other.id === "player") {
            this.speed = 0;
            // Collision: Top of Goomba with Bottom of Player
            console.log(this.collisionData.touchPoints.other.bottom + 'bottom')
            console.log(this.collisionData.touchPoints.other.top + "top")
            console.log(this.collisionData.touchPoints.other.right + "right")
            console.log(this.collisionData.touchPoints.other.left + "left")
            
            if (this.collisionData.touchPoints.other.bottom && this.immune == 0) {
                GameEnv.invincible = true;
                this.speed = 0;
                playGoombaDeath();

                setTimeout((function() {
                    GameEnv.invincible = false;
                    this.destroy();
                }).bind(this), 1500);

            }
        }

        
    }
}


/**
 * followPlayer Purpose:
 * Allows for smooth movement &
 * Dynamically changes based off player Y
 * 
 * @param {number} min Start Point
 * @param {number} max Destination
 * @param {number} t Rate of Change
 * @returns 
 * 
 */
function followPlayer(min, max, t) {
  return (max - min) * t + min;
}

export default FlyingGoomba;