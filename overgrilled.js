console.log("we connected")

import Game from "./src/game"


document.addEventListener("DOMContentLoaded", () => {
    let game = new Game()

    let startButton = document.getElementById('start-button')
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro-container').classList.add('hidden')
        game.addClickToItems();
        game.addClickToClearPlate();
    })
    
    // x, y, width, height

})