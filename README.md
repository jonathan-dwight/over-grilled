# Over Grilled

## Overview

Over-Grilled is a game where it test your skill to prepare as many burgers as you can. The order will show on the grill and you need to prepare it properly on the plate. You have 60 seconds to see how many burgers you can create. Can you survive the heat!!!

Live Link: [Over Grilled](https://jonathan-dwight.github.io/over-grilled/) 


## Technologies

* Vanilla JavaScript
* HTML 5
* CSS 3

## Instructions 

* Users can click on images of the burger item to place it on the plate and try to match it from the grill window by clicking order up

![image](https://github.com/jonathan-dwight/over-grilled/blob/main/assets/instructions.png)

[![Image from Gyazo](https://i.gyazo.com/0636edba823066ba70c47728563b51f8.gif)](https://gyazo.com/0636edba823066ba70c47728563b51f8)


## Technical Implementations

```js
addClickToItems() {
        let items = Array.from(document.getElementsByClassName('burger-item'));
        items.forEach(item => {
            item.addEventListener('click', () => {
                this.burger.addIngredient(item.id)
            })
        })
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
```
* Used JavaScripts vanilla DOM Manipulation to allow users to click on an item and see the image be placed on the plate
* Made sure the items being placed were at the right order, which required using the insertBefore and firstChild methods

## Future Implementations

* Finish adding sounds and music to application
* Allowing users to use the keys from the keyboard to play instead of just mouse interactions
