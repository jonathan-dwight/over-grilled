const BURGER_ITEMS = {
    cheese: "assets/cheese.png",
    ketchup: "assets/ketchup-icon.png",
    lettuce: "assets/salad.png",
    mustard: "assets/mustard-icon.png",
    beef: "assets/beef-patty-t.png",
    bottom_bun: "assets/bottom-bun.png",
    top_bun: "assets/top-bun.png"
}

class Burger {
    constructor(order) {
        this.burger = [];
        // this.order = order;

    }

    clearPlate() {
        this.burger = [];
        this.show();
    }

    addIngredient(item) {
        this.burger.push(item)
        this.show();
    }

    show() {
        let plate = document.getElementsByClassName('plate')[0];
        plate.innerHTML = ""
        let initialImg = document.createElement('img');
        initialImg.src = "assets/plate.png";
        initialImg.className = 'plate-img'
        plate.appendChild(initialImg)
        
        for (let i = 0; i < this.burger.length; i++) {
            let ingredient = this.burger[i];
            let img = document.createElement('img');
            img.src = BURGER_ITEMS[ingredient];
            img.id = ingredient;
            img.className = 'burger-item-1'
            if (i === 0) {
                let plateImg = document.getElementsByClassName('plate-img')[0]
                plate.insertBefore(img, plateImg);
            } else {
                let theFirstChild = plate.firstChild
                plate.insertBefore(img, theFirstChild);
            }
        }
    }

    
}

export default Burger;