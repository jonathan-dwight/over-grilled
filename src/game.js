import Burger from './burger'
import BurgerOrder from "./burger-order"

class Game {
    constructor () {
        let items = 3
        this.burger = new Burger();
        this.burgerOrder = new BurgerOrder(items)
        // this.order = [];
        this.start = this.start.bind(this)
        this.addClickToItems = this.addClickToItems.bind(this)
        this.addClickToClearPlate = this.addClickToClearPlate.bind(this)
    }

    start() {
        this.addClickToItems();
        this.addClickToClearPlate();
        this.burgerOrder();
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

    gameRound() {
        this.burgerOrder = new BurgerOrder(4)
        this.burger = new BurgerOrder()
    }
}

export default Game