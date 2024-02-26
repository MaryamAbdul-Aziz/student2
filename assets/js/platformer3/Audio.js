// Audio when Goomba Dies
export function playGoombaDeath() {
  const goombaDeathSound = document.getElementById("goombaDeath");
  goombaDeathSound.play();
}

//Audio when snake dies
export function snakeDeath() {
  const snakeSound = document.getElementById("snakedeath");
  snakeSound.play();
}

// Audio when jumping
export function playJump() {
  const PlayerJumpSound = document.getElementById("PlayerJump");
  PlayerJumpSound.play();
}

// Audio when mage jumps
export function mageJump() {
  const mJumpAudio = document.getElementById("magejump");
  mJumpAudio.play();
}

// Audio when player Dies
export function playPlayerDeath() {
  const playerDeathSound = document.getElementById("PlayerDeath");
  playerDeathSound.play();
}

// Audio when mage Dies
export function mageDeath() {
  const mageAudio = document.getElementById("magedeath");
  mageAudio.play();
}

// Audio when stepping on Mushroom
export function mushroomSound() {
  const mushroomSound = document.getElementById("Mushroom");
  mushroomSound.play();
}

// Audio when collecting coin
export function coinSound() {
  const coinSound = document.getElementById("coin");
  coinSound.play();
}

// Audio for traveling in tube
export function tubeSound () {
  const tubeAudio = document.getElementById("tube");
  tubeAudio.play();
}

// Audio for traveling in portal
export function portalSound () {
  const portalAudio = document.getElementById("portal");
  portalAudio.play();
}

/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/
