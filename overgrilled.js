console.log("we connected")

document.addEventListener("DOMContentLoaded", () => {
    let startButton = document.getElementById('start-button')
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro-container').classList.add('hidden')
    })
})