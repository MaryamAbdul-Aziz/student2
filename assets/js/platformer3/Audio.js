// Audio when Goomba Dies
export function playGoombaDeath() {
  const goombaDeathSound = document.getElementById("goombaDeath");
  goombaDeathSound.play();
}

// Audio when jumping
export function playJump() {
  const PlayerJumpSound = document.getElementById("PlayerJump");
  PlayerJumpSound.play();
}

// Audio when player Dies
export function playPlayerDeath() {
  const playerDeathSound = document.getElementById("PlayerDeath");
  playerDeathSound.play();
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


/*To Add Other Audio Functions:
  function soundFunction() {
    const soundVariable = document.getElementById("soundID");
    soundVariable.play();
  }
*/
