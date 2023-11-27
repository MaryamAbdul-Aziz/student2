---
layout: post
toc: True
title: Maryam Individual Review
description: Summary of learning, contributions, and key events
type: tangibles
courses: {'compsci': {'week': 10}}
---

## Issue Review

### [Week 1](https://github.com/kaylale124/final-game/issues/1)
- [Drew canvas including background image](https://github.com/kaylale124/final-game/commit/08f463f756dc325a9989481b8a9419ad6e39375e)
- [Set background dimensions](https://github.com/kaylale124/final-game/commit/43f8181863590832901dea411086be52b2800b0a)
- [Positioned canvas on screen](https://github.com/kaylale124/final-game/commit/98940f5893bc41637988ead0cab1f8c817a6119e)
- Created invert button
    - [Updated to automatically invert](https://github.com/kaylale124/final-game/commit/0c5ccca6940d3c4a08d7d96a9105b0501809c57a)
- [Created start screen](https://github.com/kaylale124/final-game/commit/b84edb019d92eae833be8009f64712bfb5093835)

### [Week 2](https://github.com/kaylale124/final-game/issues/2)
- Worked on resizing canvas to adjust for header
- [Worked on `textBackground` element](https://github.com/kaylale124/final-game/commit/db48889de912c476a6d3cda360f91f56a109cb06)
    - Resized
    - [Tried to make universal](https://github.com/kaylale124/final-game/commit/642cda582246e51b51d3a2a073e2679a2bc5e711)
    - [Ultimately scrapped this portion](https://github.com/kaylale124/final-game/commit/dcf96ad4ea8fbcf834c32a7d5ae3a84649977c5d)
- [Made `backgroundImage` universal](https://github.com/kaylale124/final-game/commit/1235ae9c492c0a20dfbc446209f2f8be742ae18a)
- [Edited `startGame()` function to remove some elements from screen upon button press](https://github.com/kaylale124/final-game/commit/83b8701f60558736539b0e20cac71f76a424f9eb)

### [Week 3](https://github.com/kaylale124/final-game/issues/3)
- [Attempted to begin OOP integration](https://github.com/kaylale124/final-game/commit/90697e283573100111692804a7614824b06298b1)
- [Replaced CSS styles with imported stylesheet](https://github.com/kaylale124/final-game/commit/2d6728253b7ff5abd655ec6df9864d5a5d4ff61c)
- [Moved main game to index.html and changed some menu tabs](https://github.com/kaylale124/final-game/commit/f4736e34dde20ad7374218c3ff5cc38630b81599)

I did a lot of trial and error for this stage of my code so I have little to show in commits as a lot of my code was nonfunctional and never pushed

## HTML and CSS Elements  

### HTML
Overarching `canvasContainer` and `placeholder` elements
<!-- Prepare DOM elements -->
<div id="canvasContainer">
    <canvas id="backgroundID">
        <img id="backgroundImage" src="{{backgroundFile}}">
    </canvas>
</div>

<div id="placeholder"></div>

Main Screen with game title set-up leading into Start Screen with character customization
<!--loading screen-->
<div id="mainScreen">
    <h1>The Armeneggon</h1>
    <p><em>A Space Invaders Game</em></p>
    <div id="start">
        <button id="startButton">Start</button>
    </div>
</div>

<div id="startScreen" class="hidden">
    <h1 id="chooseText">Choose your character</h1>
    <!--...-->
    <button id="startGameButton" onclick="startGame()">Start Game</button>
</div>

### CSS

Set `canvas` and `backgroundImage` properties
<style>
canvas {
    position: absolute;
    top: 60px;
    bottom: 205px;
    left: 0;
    width: 100%;
}
#backgroundImage {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>

Defined `placeholder` for fitting `backgroundImg` into screen
<style>
#placeholder {
    width: 100%;
}
</style>

Designed `mainScreen` and `startScreen` to be uniform and centered
<style>
#mainScreen {
    display: none; /* will be displayed after image loads*/
    position: absolute;
    top: 50%; /* Vertically centered */
    left: 50%; /* Horizontally centered */
    transform: translate(-50%, -50%); /* Center the text */
    text-align: center; /* Center the text horizontally */
    color: rgb(0, 0, 0);
    z-index: 2; /* places element on top of other elements (bring to front) */
}
#startScreen {
    text-align: left;
    position: absolute;
    top: 80px;
    left: 270px;
    color: rgb(0, 0, 0);
    z-index: 2; /* places element on top of other elements (bring to front) */
}
</style>

Button class for uniformity
<style>
.button {
    margin-top: 20px;
    margin: 0 auto;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    display: block;
}
</style>

`.hidden` class for ease of adding and removing elements with button clicks
<style>
.hidden {
    display: none;
}
</style>

## Canvas and Background

Set `backgroundImg` to appear `.onload` by setting dimensions and other properties
<script>
    const canvasWidth = maxWidth;
    const canvasHeight = canvasWidth / ASPECT_RATIO;  // height is oriented by width
    const canvasLeft = 0;
    const canvasTop = 60;
    
    // Set dimensions for the background canvas
    canvas.width = WIDTH / ADJUST;
    canvas.height = HEIGHT / ADJUST;

    // Set Style properties for the background canvas
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.style.position = 'absolute';
    canvas.style.left = `${canvasLeft}px`;
    canvas.style.top = `${canvasTop}px`;
</script>


Drew backgroundImg onto canvas
<script>
    draw() {
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    }
</script>

Function to invert colors to fix display issues
<script>
    //Invert the colors
    var isFilterEnabled = true;
    const defaultFilter = getComputedStyle(document.documentElement).getPropertyValue('--default-canvas-filter');
    if (isFilterEnabled) {
        canvas.style.filter = "none";  // remove filter
    } else {
        canvas.style.filter = defaultFilter; // Apply the default filter value
    }
</script>

## Div adjustment based on other element

Adjust size of `placeholder` div based on size of `backgroundImg`
<script>
//adjusts size of placeholder
function placeholderAdjust() {
    const backgroundImg = document.getElementById('backgroundImage');
    if (backgroundImg.complete) {
        const backgroundHeight = backgroundImg.height;
        placeholder.style.height = backgroundHeight + 'px';
    }
}
    
// Call the function initially and on window resize
window.addEventListener('resize', placeholderAdjust);

// Trigger the adjustment when the window loads
window.addEventListener('load', placeholderAdjust);
</script>

## Functionality of Buttons to Remove Elements

`mainScreen` and `startScreen` buttons remove certain elements of page `.onclick`
<script>
//start button code
document.getElementById('startButton').addEventListener('click', function() {
    var mainScreen = document.getElementById("mainScreen");
    mainScreen.remove();
    var startScreen = document.getElementById('startScreen');
    startScreen.classList.remove('hidden');
});

function startGame() {
        // ...
        // Remove elements using a loop
        for (var i = 0; i < startGameRemove.length; i++) {
            var element = document.getElementById(startGameRemove[i]);
            if (element) {
                if (i === 1) {
                    element.classList.remove('hidden');
                } else {
                    element.remove();
                }
            }
        }
    //...
}
</script>

## CharacterMonkey.js code and fixes

Overrode parent class `Character.js` to center chicken horizontally instead of generating randomly at top

<script>
export class CharacterMonkey extends Character{
    //...
        this.position = {
            x: this.canvas.width / 2,
            y: 0
        }
}
</script>

Overrode parent class to keep chicken character on the floor

<script>
    size() {
        super.size();
        if (!GameEnv.prevInnerWidth) {
            this.setY(GameEnv.bottom);
        }
        this.setX(GameEnv.innerWidth/2);
    }
</script>

## N@tM Extra Credit Peer Reviews

**Group name:** SAIL
- [X] Frontend
- [X] Backend
- [X] Screen Design
- [X] API


**HOOK!** Key features achieved (shown in running demo to graders), 1 minute show
<br>
[4]
<br>
Good presentation skills, showed all features, everyone talked
   
**KNOWLEGE, HOW IT IS MADE!**
<br>
[4] 
<br>
Clearly know a lot, did a lot of things (games, flashcards, quiz, informational, search engine using Unsplash)

**VALUE.**
<br>
[3.7]
<br>
Shows a lot of understanding about topic, learned a lot

**WOW Factor**
<br>
[1] 
<br>
Lots of mini games lots of information 



## Retrospection

Areas of Success:
- Effective teamwork and communication with each other

- Slowly gained more understanding over time, understood code better
    - Code became better and better over time (worked better, more complex)

- Good at problem solving, continuing to work through adversity

- Creativity in ideas, flexibility with our requirememnts for our game

Areas of Improvement:
- We need to simplify problems a lot more and not overthink things. Many of our problems had simple solutions that we overlooked.

- We needed to be working in one file for a longer time to make integration go smoother

- We needed more realisitic expectations on what we could and could not get done

- Work faster and more often, be more efficient so we could finish in a timely manner