---
layout: base
title: Platformer Game v2.0 
description: Incorporate student lessons. Gameplay includes enemies, platforms, parallax backgrounds, settings with local storage, etc.  This revision introduces Settings, Leaderboard and Multiplayer.
type: collab
courses: { csse: {week: 18} }
image: /images/platformer/backgrounds/home.png
---

<!-- Syle is now located, as of Jan 2024 v2.0, in _sass/minima/platformer-styles.scss -->

<!-- DOM Settings Panel (sidebar id and div), managed by SettingsContro.js -->

<link rel="stylesheet" type="text/scss" href="/_sass/minima/platformer-styles.scss">


<div id="sidebar" class="sidebar">
  <a href="javascript:void(0)" id="sidebar-header">&times; Settings</a>
</div>
<div id="leaderboardDropDown" class="leaderboardDropDown">
  <a href="javascript:void(0)" id="leaderboard-header">&times; Leaderboard</a>
</div>

<!--Audio for Mushroom -->
<audio id="Mushroom" src="{{site.baseurl}}/assets/audio/Mushroom.mp3" preload="auto"></audio>

<!--Audio for Death of Goomba -->
<audio id="goombaDeath" src="{{site.baseurl}}/assets/audio/goomba-death.mp3" preload="auto"></audio>

<!--Audio for Jump oF player -->
<audio id ="PlayerJump" src="{{site.baseurl}}/assets/audio/mario-jump.mp3" preload="auto"></audio>

<!--Audio for death of player -->
<audio id ="PlayerDeath" src="{{site.baseurl}}/assets/audio/MarioDeath.mp3" preload="auto"></audio>

<!--Audio for coin collection -->
<audio id ="coin" src="{{site.baseurl}}/assets/audio/coin.mp3" preload="auto"></audio>


<!-- Wrap both the controls and gameplay in a container div -->
<div id="canvasContainer">
  <div class="submenu">
    <div id="score">
        Timer: <span id="timeScore">0</span>
    </div>
    <div id="gameBegin" hidden>
        <button id="startGame">Start Game</button>
    </div>
    <div id="gameOver" hidden>
        <button id="restartGame">Restart</button>
    </div>
    <div id="settings"> <!-- Controls -->
        <!-- Background controls -->
        <button id="settings-button">Settings</button>
    </div>
    <div id="leaderboard"> <!-- Controls -->
        <button id="leaderboard-button">Leaderboard</button>
    </div>
  </div>
  <!-- JavaScript-generated canvas items are inserted here -->
</div>

<div id="container">
    <header class="fun_facts">
    <p id="num">Fun Fact #0</p>
    <h3 id="fun_fact">Mario is named after frustrated landlord, Mario Segale, of the Nintendo of America building.</h3> <!-- want to access later so have id-->
    </header>
  </div>

<footer id="cut-story"></footer>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
#score {
  position: relative;
  z-index: 2;
  padding: 5px;
  color: $dt-red !important; 
}
#gameBegin, #gameOver, #settings, #leaderboard {
  position: relative;
  z-index: 2;
}
#addRow, #backToGame {
  position: relative;
  z-index: 2; 
  display: inline-block;
  margin-right: $spacing-unit;
}
@mixin dark-mode-color {
  color: $high-emph !important; 
  background-color: $dark-grey !important; 
  border: 1px solid $dt-blue; 
}
.submenu {
  @include dark-mode-color; 
  border: none; 
  position: fixed;
  z-index: 3; 
  top: $spacing-unit * 1.865;  
  width: fit-content;
  
  #score, #gameBegin, #gameOver, #settings, #leaderboard {
    display: inline-block; 
    margin-right: $spacing-unit; 
  }
}
.sidebar {
  @include dark-mode-color;
  border: none; 
  position: fixed;
  z-index: 3;

  top: 0; 
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: hidden; 
  transition: 0.5s; 
  
  width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  overflow-y: scroll; 
  height: 75%;
}
.leaderboardDropDown {
  @include dark-mode-color; 
  border: none; 
  position: fixed;
  z-index: 3; 

  top: 0; 
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: hidden; 
  transition: 0.5s; 

  width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  height: 75%;
  scroll-behavior: auto;
}

#leaderboardTitle {
  text-align: center;
  color: greenyellow;
  text-decoration: wavy;
  font-weight: 900;
  font-size: 100px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: rgb(163, 55, 163);
}

dt-leaderboard: #B385EB;
.table.scores, th, tr, td {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.table.scores {
  th {
    background-color: #5F3692;
  }
  tr {
    td {
      border: 1px solid mix($dt-leaderboard, black, 50%);
      &:nth-child(odd) {
        background-color: $dt-leaderboard; 
      }
      &:nth-child(even) {
        background-color: mix($dt-leaderboard, gray, 60%); 
      }
    }
  }
}
.table.levels {
  tr {
    cursor: pointer; 
    td {
      border: 1px solid $dt-blue;
    }
    &:hover { 
      background-color: $dt-blue; 
      td {
        background-color: inherit; 
      }
    }
  }
}
@mixin input {
  @include dark-mode-color; 
  height: 30px;
  border-radius: 5px;
  padding: 5px;
}
.input.userID {
  @include input;
  width: 100px; 
}
.input.gameSpeed, .input.gravity {
  @include input;
  width: 40px;  
  text-align: right; 
}

#toggleCanvasEffect, #background, #platform{
  animation: fadein 5s;
}
#startGame, #marioSays{
  animation: flash 0.5s infinite;
}
@keyframes flash {
  50% {
    opacity: 0;
  }
}
@keyframes fadeout{
    from {opacity: 1}
    to {opacity: 0}
}
@keyframes fadein{
    from {opacity: 0}
    to {opacity: 1}
}
.bottom-matter{
  position: relative;
}
#cut-story{
  visibility: hidden;
  min-width: 250px;
  background-color: rgb(255, 93, 12);
  color: white;
  font-family: "Press Start 2P", system-ui;
  border-radius:4px;
  position: fixed;
  text-align: center;
  justify-content: center;
  border: 4px solid;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 50%;
  padding: 10px;
  bottom: 0px;
}

#cut-story.show{
  visibility: visible;
  -webkit-animation: fadein 3s;
  animation: fadein 3s;
}
#cut-story.hide{
  visibility: visible;
  -webkit-animation: fadeout 0.5s 3s;
  animation: fadeout 0.5s 3s;
}
body{
  background: #FFB6C1;
}
#container{
  width: 95%;
  height: 100vh;
  display: flex;
  text-align: center;
}
.fun_facts{
  min-width: 250px;
  background-color: rgb(12, 235, 255);
  color: rgb(9, 107, 78);
  font-family: "Press Start 2P", system-ui;
  border-radius:20px;
  position: absolute;
  text-align: center;
  border: 4px solid;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 90%;
  padding: 10px;
  bottom: 0px;
}
.fun_facts h3, .fun_facts p{
  font-size: 1rem;
}
</style>

<script type="module">
    // Imports to drive game
    import GameSetup from '{{site.baseurl}}/assets/js/platformer3/GameSetup.js';
    import GameControl from '{{site.baseurl}}/assets/js/platformer3/GameControl.js';
    import SettingsControl from '{{site.baseurl}}/assets/js/platformer3/SettingsControl.js';
    import GameEnv from '{{site.baseurl}}/assets/js/platformer3/GameEnv.js';
    import Leaderboard from '{{site.baseurl}}/assets/js/platformer3/Leaderboard.js';
    import {playGoombaDeath, playJump, playPlayerDeath, mushroomSound, coinSound} from '{{site.baseurl}}/assets/js/platformer3/Audio.js';

    /* 
     * ==========================================
     * ========== Game Setup ====================
     * ==========================================
     * Game Setup prepares the Game Levels and Objects
     * 1.) There are one-to-many GameLevels in a Game
     * 2.) Each GameLevel has one-to-many GameObjects
     * ==========================================
    */

    // Setup game data, the objects and levels
    GameSetup.initLevels("{{site.baseurl}}"); 

    /* 
     * ==========================================
     * ========== Game Control ==================
     * ==========================================
     * Game Control starts the game loop and activates game objects
     * 1.) GameControl cycles through GameLevels
     * 2.) Each GameLevel is on a looping timer, called within the game loop 
     * 3.) The game loop allows the game player (user), to interact with the game objects 
     * 4.) A timer (or score) tracks the time of user interaction within the game
     * ==========================================
    */

    // Start the PRIMARY game loop
   GameControl.gameLoop();

    // Create an async event to start the timer when the start game button is pushed
    var y = document.getElementById("cut-story");
    y.style.display = "none";
    document.getElementById('startGame').addEventListener('click', () => {
        GameControl.startTimer(); 
        var x = document.getElementById("container");
        if (x.style.display === "none") {
          x.style.display = "block";
          } 
        else {
          x.style.display = "none";
          }
        if (y.style.display === "none") {
          y.style.display = "block";
          } 
        else {
          y.style.display = "none";
          }
      
        let cutStory = document.getElementById('cut-story');
        let messages = ["Hi! My name is Mario, and I wish...", 
        "I wish I could be just as cool as this guy, Mr. Lopez.", "Help me get to the next level to become him!","This game was provided by CompSci Inc.","Stomp on Mushroom to get 3 seconds off your total time!","Turn on multiplayer from the settings tab to play with others."];

        //if let messages = ("Stomp on Mushroom to get 3 seconds off your total time!")
        //GameEnv.messages = true;
      

        

        function showMessage(){
            var x = cutStory;
            x.className = 'show'; // change class name to show
            //only want to last 3 secs
            setTimeout(function(){x.className = x.className.replace('show',' ');}, 2000); //replace show with an empty string
             setTimeout(function(){x.className = x.className.replace(' ','hide');}, 2000);
            console.log("class name after: "+x.className);
        }
        
        let i = 0;
        let interval = setInterval(() => 
        {
          cutStory.innerText = messages[i]; 
          showMessage();
          i++;
          if(i==messages.length){
            clearInterval(interval)
          }
        }, 3000);
    
    
    
    });
    /* 
    * ==========================================
    * ========== Settings Control ==============
    * ==========================================
    * Settings Control provides the ability to select game level and change game settings
    * 1.) SettingsControl must be after GameControl, it depends on GameLevels 
    * 2.) GameControl extends and implements LocalStorage to support the persistence of user data
    * 3.) Modifications can be made to User ID, GameSpeed, Gravity, and Invert(ing) screen color
    * ==========================================
    */

    // Construct settings sidebar, MVC variable paradigm, and async events to trigger user interaction
    SettingsControl.sidebar();
    
    Leaderboard.leaderboardDropDown();

    /* 
     * ==========================================
     *  ========== Event / Listeners =============
     *  ==========================================
     * System Event listeners
     * 1.) Window resize and GameEnv.resize trigger system updates
     * 2.) Most event listeners remain near impacting functions
     * ==========================================
    */

    // Game refresh is required when the height and width of the screen are impacted
    window.addEventListener('resize', GameEnv.resize);

</script>