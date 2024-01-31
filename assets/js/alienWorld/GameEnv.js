export class GameEnv {
    // Prototype static variables
    static innerWidth;
    static prevInnerWidth;
    static innerHeight;
    static top;
    static bottom;
    static prevBottom;
    static gameSpeed;
    static gravity;

    static score = 30;  //decrement this in floorAction and display this in DOM
    // Make the constructor private to prevent instantiation
    constructor() {
        throw new Error('GameEnv is a static class and cannot be instantiated.');
    }

     // Setter for Top position
     static setTop() {
        // set top of game as header height
        const header = document.querySelector('header');
        if (header) {
            this.top = header.offsetHeight;
        }
    }

    // Setter for Bottom position
    static setBottom() {
        // set bottom of game as background height
        const background = document.querySelector('#background');
        if (background) {
            this.bottom = background.offsetHeight;
        }
    }
    
    // Setter for Game Environment 
    static setGameEnv() {
        // store previous for ratio calculatins on resize
        this.prevInnerWidth = this.innerWidth;
        this.prevBottom = this.bottom;
    
        // game uses available width and heith
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;

        this.setTop();
        // this.setBottom() is ignored for now as resize of background object determinse bottom
    }
    static updateScoreDisplay() {
        // Get the score element from the DOM
        const scoreElement = document.getElementById('score');

        if (scoreElement) {
            // Update the score display with the current score value
            scoreElement.textContent = `Score: ${this.score}`;
        }
    }
    static decrementScore(amount){
        this.score -=amount;
    }
    
}

export default GameEnv;
