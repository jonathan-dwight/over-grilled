import Burger from './burger'

class Game {
    constructor () {
        this.burger = new Burger()
        // this.order = [];
        this.start = this.start.bind(this)
    }

    start() {

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
}

export default Game