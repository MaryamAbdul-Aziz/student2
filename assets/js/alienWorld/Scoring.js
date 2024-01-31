import GameEnv from './GameEnv.js';

// scoring.js

// Initialize the player's score to 30
let score = 30;

// Select the score display element with the "score-display" class
const scoreElement = document.querySelector('.score-display');

if (scoreElement) {
    // Apply the styles
    scoreElement.style.position = 'absolute';
    scoreElement.style.top = '10px';
    scoreElement.style.left = '10px';
    scoreElement.style.fontSize = '16px';
    scoreElement.style.color = 'white';
    scoreElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    scoreElement.style.padding = '5px';
    scoreElement.style.borderRadius = '5px';
}

export function updateScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = `Score: ${score}`;
    } else {
        console.error("Element with id 'score' not found.");
    }
}

// Function to increase the score
export function increaseScore(points) {
    score += points;
    updateScore();
}

// Call the updateScore function to display the initial score
document.addEventListener("DOMContentLoaded", function () {
    updateScore();
});

export default score;
