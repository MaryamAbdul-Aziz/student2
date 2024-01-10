---
layout: base
title: Dynamic Game Levels
description: Early steps in adding levels to an OOP Game.  This includes basic animations left-right-jump, multiple background, and simple callback to terminate each level.
type: hacks
courses: { compsci: {week: 13} }
image: /images/platformer/backgrounds/hills.png
---

<style>
#gameBegin, #controls, #gameOver, #settings {
    position: relative;
    z-index: 2; /*Ensure the controls are on top*/
  }
  /*#toggleCanvasEffect, */#background, #platform {
  animation: fadein 2s;
  }
  #startGame {
    animation: flash 0.5s infinite;
  }
  .sidenav {
      position: fixed;
      height: 100%; /* 100% Full-height */
      width: 0px; /* 0 width - change this with JavaScript */
      z-index: 3; /* Stay on top */
      top: 0; /* Stay at the top */
      left: 0;
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
      background-color: black; 
    }
  .center-text {
    text-align: center;
  }
    @keyframes flash {
    50% {
      opacity: 0;
    }
  }
  @keyframes fadeout {
    from {opacity: 1}
    to {opacity: 0}
  }
  @keyframes fadein {
    from {opacity: 0}
    to {opacity: 1}
  }
  #score {
    position: absolute; 
    top: 75px; 
    left: 10px; 
    color: black; 
    font-size: 20px; 
    background-color: white;
  }
</style>

<div id="mySidebar" class="sidenav">
  <a href="javascript:void(0)" id="toggleSettingsBar1" class="closebtn">&times;</a>
</div>

<!-- Prepare DOM elements -->
<!-- Wrap both the canvas and controls in a container div -->
<div id="canvasContainer">
    <div id="gameBegin" hidden>
        <button id="startGame">Start Game</button>
    </div>
    <div id="controls"> <!-- Controls -->
        <!-- Background controls -->
            <!--<button id="toggleCanvasEffect">Invert</button>-->
            <button id="leaderboardButton">Leaderboard</button>
    </div>
        <div id="settings"> <!-- Controls -->
        <!-- Background controls -->
        <button id="toggleSettingsBar">Settings</button>
        <button id="clearLocalStorage">Clear Local Storage</button>
    </div>
    <div id="gameOver" hidden>
        <button id="restartGame">Restart</button>
    </div>
</div>

<div id="score">
   Time: <span id="timeScore">0</span>
</div>

<script type="module">
    // Imports
    import GameEnv from '{{site.baseurl}}/assets/js/platformer/GameEnv.js';
    import GameLevel from '{{site.baseurl}}/assets/js/platformer/GameLevel.js';
    import GameControl from '{{site.baseurl}}/assets/js/platformer/GameControl.js';


    /*  ==========================================
     *  ======= Data Definitions =================
     *  ==========================================
    */

    // Define assets for the game
    var assets = {
    thing: {
        coin: { src: "/images/Coin.png" }
      },  
    platformO: {
        grass: { src: "/images/brick_wall.png" },
    },
    platform2: {
        grass: { src: "/images/brick_wall.png" },
    },          
    enemies: {
      goomba: {
        src: "/images/platformer/sprites/goomba.png",
        width: 448,
        height: 452,
      }
      },
      obstacles: {
        tube: { src: "/images/platformer/obstacles/tube.png" },
      },
      platforms: {
        grass: { src: "/images/platformer/platforms/grass.png" },
        alien: { src: "/images/platformer/platforms/alien.png" }
      },
      backgrounds: {
        start: { src: "/images/platformer/backgrounds/home.png" },
        hills: { src: "/images/platformer/backgrounds/hills.png" },
        mountains: { src: "/images/platformer/backgrounds/mountains.jpg"},
        planet: { src: "/images/platformer/backgrounds/planet.jpg" },
        castles: { src: "/images/platformer/backgrounds/castles.png" },
        avenida: { src: "/images/platformer/backgrounds/avenida.png" },
        end: { src: "/images/platformer/backgrounds/game_over.png" }
      },
      players: {
        mario: {
          src: "/images/platformer/sprites/mario.png",
          width: 256,
          height: 256,
          w: { row: 10, frames: 15 },
          wa: { row: 11, frames: 15 },
          wd: { row: 10, frames: 15 },
          a: { row: 3, frames: 7, idleFrame: { column: 7, frames: 0 } },
          s: { row: 12, frames: 15  },
          d: { row: 2, frames: 7, idleFrame: { column: 7, frames: 0 } }
        },
        monkey: {
          src: "/images/platformer/sprites/monkey.png",
          width: 40,
          height: 40,
          w: { row: 9, frames: 15 },
          wa: { row: 9, frames: 15 },
          wd: { row: 9, frames: 15 },
          a: { row: 1, frames: 15, idleFrame: { column: 7, frames: 0 } },
          s: { row: 6, frames: 15 },
          d: { row: 0, frames: 15, idleFrame: { column: 7, frames: 0 } }
        },
        lopez: {
          src: "/images/platformer/sprites/lopezanimation.png", 
          width: 46,
          height: 52.5,
          idle: { row: 6, frames: 1, idleFrame: {column: 1, frames: 0} },
          a: { row: 1, frames: 4, idleFrame: { column: 1, frames: 0 } }, // Right Movement
          d: { row: 2, frames: 4, idleFrame: { column: 1, frames: 0 } }, // Left Movement 
          runningLeft: { row: 5, frames: 4, idleFrame: {column: 1, frames: 0} },
          runningRight: { row: 4, frames: 4, idleFrame: {column: 1, frames: 0} },
          s: {}, // Stop the movement 
        }
      }
    };


// Function to switch to the leaderboard screen
function showLeaderboard() {
  const id = document.getElementById("gameOver");
  id.hidden = false;

  // Hide game canvas and controls
  document.getElementById('canvasContainer').style.display = 'none';
  document.getElementById('controls').style.display = 'none';

  // Create and display leaderboard section
  const leaderboardSection = document.createElement('div');
  leaderboardSection.id = 'leaderboardSection';
  leaderboardSection.innerHTML = '<h1 style="text-align: center; font-size: 18px;">Leaderboard</h1>';

  // Create a table
  const leaderboardTable = document.createElement('table');
  leaderboardTable.style.width = '30%';
  leaderboardTable.style.margin = '0 auto';  // Center the table horizontally

  // Create header row and format
  const headerRow = leaderboardTable.insertRow();
  const headerCell1 = headerRow.insertCell(0);
  const headerCell2 = headerRow.insertCell(1);
  headerCell1.innerHTML = '<b>Player Name</b>';
  headerCell2.innerHTML = '<b>Time (seconds)</b>';
  headerCell1.classList.add('center-text');
  headerCell2.classList.add('center-text');

  // Get player scores from local storage
  const playerScores = localStorage.getItem("playerScores");
  const playerScoresArray = playerScores.split(";").filter(score => score.trim() !== "");

  // Create a row for each player and add it to the table
  playerScoresArray.forEach(playerScore => {
    const [playerName, score] = playerScore.split(",");
    const row = leaderboardTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = playerName;
    cell2.innerHTML = score;

    cell1.classList.add('center-text');
    cell2.classList.add('center-text');
  });

  // Append the table to the leaderboard section
  leaderboardSection.appendChild(leaderboardTable);

  // Append the leaderboard section to the page content
  document.querySelector(".page-content").appendChild(leaderboardSection);
}


// Event listener for leaderboard button to be clicked
document.getElementById('leaderboardButton').addEventListener('click', showLeaderboard);

    // add File to assets, ensure valid site.baseurl
    Object.keys(assets).forEach(category => {
      Object.keys(assets[category]).forEach(assetName => {
        assets[category][assetName]['file'] = "{{site.baseurl}}" + assets[category][assetName].src;
      });
    });

    /*  ==========================================
     *  ===== Game Level Call Backs ==============
     *  ==========================================
    */

    // Level completion tester
    function testerCallBack() {
        // console.log(GameEnv.player?.x)
        if (GameEnv.player?.x > GameEnv.innerWidth) {
            return true;
        } else {
            return false;
        }
    }

    // Helper function for button click
    function waitForButton(buttonName) {
      // resolve the button click
      return new Promise((resolve) => {
          const waitButton = document.getElementById(buttonName);
          const waitButtonListener = () => {
              resolve(true);
          };
          waitButton.addEventListener('click', waitButtonListener);
      });
    }

    // Start button callback
    async function startGameCallback() {
      const id = document.getElementById("gameBegin");
      id.hidden = false;
      
      // Use waitForRestart to wait for the restart button click
      await waitForButton('startGame');
      id.hidden = true;
      
      return true;
    }

    // Home screen exits on Game Begin button
    function homeScreenCallback() {
      // gameBegin hidden means game has started
      const id = document.getElementById("gameBegin");
      return id.hidden;
    }

    function clearLocalStorage() {
    // Clear all local storage data
    localStorage.clear();
   
    // Reload the page to reflect the changes
    location.reload();
    }

  document.getElementById('clearLocalStorage').addEventListener('click', clearLocalStorage);

  async function gameOverCallBack() {

  const id = document.getElementById("gameOver");
  id.hidden = false;

  // Store whether the game over screen has been shown before
  const gameOverScreenShown = localStorage.getItem("gameOverScreenShown");

  // Check if the game over screen has been shown before
  if (!gameOverScreenShown) {
    const playerScore = document.getElementById("timeScore").innerHTML;
    const playerName = prompt(`Your time was ${playerScore} seconds! What is your name?`);
    let temp = localStorage.getItem("playerScores");

    if (!temp) {
      temp = "";
    }
    
    temp += playerName + "," + playerScore.toString() + ";";
    localStorage.setItem("playerScores", temp);

    // Set a flag in local storage to indicate that the game over screen has been shown
    localStorage.setItem("gameOverScreenShown", "true");
  }

  // Use waitForRestart to wait for the restart button click
    await waitForButton('restartGame');
    id.hidden = true;

  // Change currentLevel to start/restart value of null
    GameEnv.currentLevel = null;

  // Reset the flag so that the game over screen can be shown again on the next game over
    localStorage.removeItem("gameOverScreenShown");
    return true;
}

    /*  ==========================================
     *  ========== Game Level setup ==============
     *  ==========================================
     * Start/Homme sequence
     * a.) the start level awaits for button selection
     * b.) the start level automatically cycles to home level
     * c.) the home advances to 1st game level when button selection is made
    */
    // Start/Home screens
    new GameLevel( {tag: "start", callback: startGameCallback } );
    new GameLevel( {tag: "home", background: assets.backgrounds.start, callback: homeScreenCallback } );
    // Game screens
    new GameLevel( {tag: "hills", background: assets.backgrounds.hills, background2: assets.backgrounds.mountains, platform: assets.platforms.grass, platformO: assets.platformO.grass, platform2: assets.platform2.grass, thing: assets.thing.coin, player: assets.players.mario, enemy: assets.enemies.goomba, tube: assets.obstacles.tube, callback: testerCallBack } );
    new GameLevel( {tag: "alien", background: assets.backgrounds.planet, platform: assets.platforms.alien, player: assets.players.monkey, callback: testerCallBack } );
    //lopez level
    new GameLevel( {tag: "lopez", background: assets.backgrounds.avenida, platform: assets.platforms.grass, platformO: assets.platformO.grass, platform2: assets.platform2.grass, player: assets.players.lopez, enemy: assets.enemies.goomba, callback: testerCallBack } );
    // Game Over screen
    new GameLevel( {tag: "end", background: assets.backgrounds.end, callback: gameOverCallBack } );

    /*  ==========================================
     *  ========== Game Control ==================
     *  ==========================================
    */

    // create listeners
    //toggleCanvasEffect.addEventListener('click', GameEnv.toggleInvert);
    window.addEventListener('resize', GameEnv.resize);

    // start game
    GameControl.gameLoop();

</script>

<!-- local storage code below -->
<!-- navigation -->
<script type="module">
  //sidebar
  var toggle = false;
  function toggleWidth(){
    toggle = !toggle;
    document.getElementById("mySidebar").style.width = toggle?"250px":"0px";
  }
  document.getElementById("toggleSettingsBar").addEventListener("click",toggleWidth);
  document.getElementById("toggleSettingsBar1").addEventListener("click",toggleWidth);

  // Generate table
  import Controller from '{{site.baseurl}}/assets/js/platformer/Controller.js';
  
  var myController = new Controller();
  myController.initialize();

  var table = myController.levelTable;
  document.getElementById("mySidebar").append(table);

  var div = myController.speedDiv;
  document.getElementById("mySidebar").append(div);

  var div2 = myController.gravityDiv;
  document.getElementById("mySidebar").append(div2);
</script>