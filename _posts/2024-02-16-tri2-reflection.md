---
layout: post
toc: true
comments: true
title: Trimester 2 Reflection
description: Summary of learning over the trimester
type: tangibles
courses: {'compsci': {'week': 18}}
---

# Team Reflection

## Glows

- Added meaningful code (death animation, coins)
- Frequently asked for help and received assistance with others
- Communicated well


Death animation:
    - Learned about CSS-type transitions and async functions within timeouts

```js
 goombaCollision() {
        if (this.timer === false) {
            this.timer = true;
            if (GameEnv.difficulty === "normal" || GameEnv.difficulty === "hard") {
                this.canvas.style.transition = "transform 0.5s";
                this.canvas.style.transform = "rotate(-90deg) translate(-26px, 0%)";
                playPlayerDeath();

                if (this.isDying == false) {
                    this.isDying = true;
                    setTimeout(async() => {
                        await GameControl.transitionToLevel(GameEnv.levels[GameEnv.levels.indexOf(GameEnv.currentLevel)]);
                        console.log("level restart")
                        this.isDying = false;
                    }, 900); 
                }
            } else if (GameEnv.difficulty === "easy") {
                this.x += 10;
            }
        }
    }
```

Coins:
    - Added collisions, worked with teammate to add sound, sized and placed gameObjects within canvas

```js
    constructor(canvas, image, data, xPercentage, yPercentage) {
        super(canvas, image, data, 0.5, 0.5);
        this.coinX = xPercentage * GameEnv.innerWidth;
        this.coinY = yPercentage;
        this.size();
    }
    //...
    collisionAction() {
        // check player collision
        if (this.collisionData.touchPoints.other.id === "player") {
            this.destroy();
            coinSound();
        }
    }    
```

```js
function coinSound() {
    const coinSound = document.getElementById("coin");
    coinSound.play();
  }
```

```js
    { name: 'coin', id: 'coin', class: Coin, data: this.assets.obstacles.coin, xPercentage: 0.1908, yPercentage: 0.75 },
    { name: 'coin', id: 'coin', class: Coin, data: this.assets.obstacles.coin, xPercentage: 0.2242, yPercentage: 0.75 },
    { name: 'coin', id: 'coin', class: Coin, data: this.assets.obstacles.coin, xPercentage: 0.2575, yPercentage: 0.75 },
    { name: 'coin', id: 'coin', class: Coin, data: this.assets.obstacles.coin, xPercentage: 0.5898, yPercentage: 0.900 },
```


## Grows

- Working together more cohesively as a team
- Some members had trouble staying busy in class period
- Time management/finishing some features in a timely manner
    - Some features/fixes of mine never became complete enough to implement and were then abandonded
        - Ex: animated coin

# Night at the Museum

## Our display

- Worked with Zidane and Daisy and showed off game on projector

<img src="{{site.baseurl}}/images/natm1.png">

- Had several demo players of game

<img src="{{site.baseurl}}/images/natm2.png">

<img src="{{site.baseurl}}/images/natm3.png">

- Talked to people, explained our code and how we collaborated as a class to add different elements

## Other displays

### CS project
'Little Alchemy' project: Combine different elements to 'bake' new items. I thought their backend was impressive as they had a long list of 'recipes' for users to try

<img src="{{site.baseurl}}/images/natm4.JPG">

### Non-CS project
Vrnda Kanhye: Photo 2 
I really liked the selective color and the framing of the photo.
<img src="{{site.baseurl}}/images/natm5.png">
