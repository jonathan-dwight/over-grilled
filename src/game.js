import Burger from './burger'
import BurgerOrder from "./burger-order"

class Game {
    constructor () {
        // let items = 3
        this.burger = new Burger();
        this.burgerOrder = new BurgerOrder(3);
        this.score = 0;
        // this.order = [];
        this.start = this.start.bind(this)
        this.addClickToItems = this.addClickToItems.bind(this)
        this.addClickToClearPlate = this.addClickToClearPlate.bind(this)
        this.newRound = this.newRound.bind(this)
    }

    start() {
        this.addClickToItems();
        this.addClickToClearPlate();
        this.addClickToSubmitOrder();
    }

    addClickToItems() {
        let items = Array.from(document.getElementsByClassName('burger-item'));
        items.forEach(item => {
            item.addEventListener('click', () => {
                this.burger.addIngredient(item.id)
            })
        })
    }

    addClickToClearPlate() {
        let button = document.getElementById('clear-plate')
        button.addEventListener('click', () => {
            this.burger.clearPlate()
        })
    }

    addClickToSubmitOrder() {
        let submitButton = document.getElementById('submit-order')
        submitButton.addEventListener('click', () => {
            this.checkGame()
        })
    }

    correctOrder() {
        return JSON.stringify(this.burgerOrder.burgerOrder) === JSON.stringify(this.burger.burger)
    }

    showScore() {
        let score = document.getElementById('score')
        score.innerHTML = `${this.score}`
    }
    
    correctOrderSound() {
        const serviceBell = new Audio('../assets/service-bell.mp3')
        serviceBell.volume = .40;
        serviceBell.play();
    }

    checkGame() {
        if (this.correctOrder()) {
            this.score += 1
            this.showScore();
            let orderDisplay = document.getElementById('order-window')
            let img = document.createElement('img')
            img.src = 'assets/check-mark.png'
            img.id = "check-mark"
            orderDisplay.innerHTML = ""
            orderDisplay.appendChild(img)
            this.correctOrderSound()
            setTimeout(this.newRound, 500)

        } else {
            let orderDisplay = document.getElementById('order-window')
            let img = document.createElement('img')
            img.src = 'assets/x-mark-picture.png'
            img.id = "check-mark"
            orderDisplay.innerHTML = ""
            orderDisplay.appendChild(img)
            setTimeout(this.newRound, 500)
        }
    }

    newRound() {
        this.burger.clearPlate();
        this.burger = new Burger();
        this.burgerOrder.delete();

        if (this.score < 1) {
            this.burgerOrder.delete() 
            this.burgerOrder = new BurgerOrder(4);
        } else if (this.score < 3) {
            this.burgerOrder = new BurgerOrder(5);
            this.burger = new Burger();
            this.burger.clearPlate();
        } else if (this.score < 6) {
            this.burgerOrder = new BurgerOrder(7);
            this.burger = new Burger();
            this.burger.clearPlate();
        } else if (this.score < 8) {
            this.burgerOrder = new BurgerOrder(8);
            this.burger = new Burger();
            this.burger.clearPlate();
        } else if (this.score < 10){
            this.burgerOrder = new BurgerOrder(10);
            this.burger = new Burger();
            this.burger.clearPlate();
        } else {
            this.burgerOrder = new BurgerOrder(10);
            this.burger = new Burger();
            this.burger.clearPlate();
        }
    }


    restart() {
        this.burgerOrder.delete();
        this.burgerOrder = new BurgerOrder(3)
        this.burger.clearPlate();
        this.score = 0;
        this.showScore();

        document.getElementById("modal").classList.add("hidden")
    }
    endGame() {
        document.getElementById("modal").classList.remove("hidden")
        const score = this.score
        let showScore = document.getElementById('end-game-score')
        showScore.innerHTML =`You're score is ${score}`
    }
}

export default Game

// wordsInput.addEventListener("keydown", typeSound);
// let soundOn = false;
// sound.addEventListener("click", () => {
//     if (soundOn === true) {
//         soundOn = false;
//         stopMusic();
//     } else {
//         soundOn = true;
//         backgroundMusic();
//     }
//     sound.innerHTML === "SOUND is OFF" ? sound.innerHTML = "SOUND is ON" : sound.innerHTML = "SOUND is OFF"
// });
// function typeSound() {
//     const keyPress = new Audio("./assets/typeclick.mp3");
//     if (soundOn === false) keyPress.muted = true;
//     keyPress.volume = .20
//     keyPress.play();
// };
// function correctSound() {
//     const correctWord = new Audio("./assets/winsound.mp3");
//     if (soundOn === false) correctWord.muted = true;
//     correctWord.volume = .40
//     correctWord.play();
// }
// function gameOverSound() {
//     const gameOver = new Audio("./assets/gmover.mp3");
//     if (soundOn === false) gameOver.muted = true;
//     gameOver.volume = .20;
//     gameOver.play();
// }
// const gameMusic = new Audio("./assets/gamemusic.mp3");
// function backgroundMusic() {
//     if (soundOn === false) gameMusic.muted = true;
//     if (soundOn === true) gameMusic.muted = false;
//     gameMusic.volume = .40;
//     gameMusic.play();
//     gameMusic.loop = true;
// }
// function stopMusic() {
//     gameMusic.pause();
//     gameMusic.currentTime = 0;
// }