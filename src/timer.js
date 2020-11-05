class Timer {
    constructor() {

    }
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
    
}
