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
    }
}

export default Game