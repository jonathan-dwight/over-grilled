const ITEMS = {
    beef: "../assets/beef patty.png",
    bottom_bun: "../assets/bottom bun.jpeg",
    top_bun: "../assets/top-bun.png"
}

const CONDIMENTS = {
    cheese: "../assets/cheese.png",
    ketchup: "../assets/ketchup icon.jpg",
    lettuce: "../assets/salad.png",
    beef: "../assets/beef patty.png",
    mustard: "../assets/mustard icon.jpg",
}

const ALL_ITEMS = {
    beef: "../assets/beef patty.png",
    bottom_bun: "../assets/bottom bun.jpeg",
    top_bun: "../assets/top-bun.png",
    cheese: "../assets/cheese.png",
    ketchup: "../assets/ketchup icon.jpg",
    lettuce: "../assets/salad.png",
    mustard: "../assets/mustard icon.jpg",
}

class BurgerOrder {
    constructor(numItems) {
        this.numItems = numItems;
        this.burgerOrder = []

        this.orderItem = this.orderItem.bind(this)
        this.showOrder()
        
    }

    order() {
        let options = Object.keys(ITEMS);
        let condimentsOptions = Object.keys(CONDIMENTS)
        
        if (this.numItems === 3) {
            this.burgerOrder.push('top_bun')
            this.burgerOrder.push('beef')
            this.burgerOrder.push('bottom_bun')
        } else {
            this.burgerOrder.push('top_bun')
            for (let i = 3; i < this.numItems-1; i++) {
                let item = Math.floor(Math.random() * 5);
                this.burgerOrder.push(condimentsOptions[item])
            }
            this.burgerOrder.push('beef')
            this.burgerOrder.push('bottom_bun')
        }

    }

    orderItem(item) {
        let img = document.createElement('img')
        img.src = ALL_ITEMS[item]
        img.className = "burger-order";
        return img
    }

    showOrder() {
        this.order()
        let orderDisplay = document.getElementById('order-window')
        // orderDisplay.classList.add('order-options')
        console.log(orderDisplay)
        this.burgerOrder.forEach((item) => {
            let img = this.orderItem(item)
            orderDisplay.appendChild(img)

        })
    }
}

export default BurgerOrder;