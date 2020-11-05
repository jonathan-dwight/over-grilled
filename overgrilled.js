console.log("we connected")

import Game from "./src/game"


document.addEventListener("DOMContentLoaded", () => {
    let game = new Game()
    let timer = 60;
    let isPlaying = true;

    let startButton = document.getElementById('start-button')
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro-container').classList.add('hidden')
        game.start()
        setInterval(time, 1000)
        // setInterval(gameStatus, 50)
    })


    function time() {
        timer > 0 ? timer-- : isPlaying = false
        let countdown = document.getElementById('timer')
        countdown.innerHTML = timer
    }

    function gameStatus() {
        if (!isPlaying && timer === 0) {
            window.alert('Game Over')
        }
    }

    function checker() {
        setInterval(gameStatus, 50)
    }
    
    // x, y, width, height

})


