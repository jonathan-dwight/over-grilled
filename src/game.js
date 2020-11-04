
class Game {
    constructor () {

        this.order = [];
        this.start = this.start.bind(this)
    }

    start() {

    }

    addClickToItems() {
        let items = Array.from(document.getElementsByClassName('burger-item'));
        items.forEach(item => {
            item.addEventListener('click', () => {
                console.log(item.id)
            })
        })
    }
}

export default Game