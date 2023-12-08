// Death.js
let death = 0;

const deathController = {
  getDeath: () => death,
  setDeath: (value) => { death = value; }
};

export default deathController;