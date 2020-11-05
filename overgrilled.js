console.log("we connected")

import Game from "./src/game"


document.addEventListener("DOMContentLoaded", () => {
    let game = new Game()
    let timer;
    let isPlaying = true;

    let startButton = document.getElementById('start-button')
    let playAgainButton = document.getElementById('play-again')
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro-container').classList.add('hidden')
        game.start()
        timer = 60;
        setInterval(time, 1000)
        setInterval(gameStatus, 50)
    })

    playAgainButton.addEventListener('click', () => {
        game.restart();
        timer = 60;
    })


    function time() {
        timer > 0 ? timer-- : isPlaying = false
        let countdown = document.getElementById('timer')
        countdown.innerHTML = timer
    }

    function gameStatus() {
        if (!isPlaying && timer === 0) {
            game.endGame()
        }
    }

    function checker() {
        setInterval(gameStatus, 50)
    }
    
    // x, y, width, height

})


