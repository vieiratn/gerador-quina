const actionButton = document.querySelector('#button');
const allBalls = document.querySelectorAll('.bola')

actionButton.addEventListener("click", function() {
    const url = 'http://localhost:3001/quina'
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let game = data
            for (i = 0; i < 5; i++) {
                allBalls[i].innerHTML = game.guess[i]
            }
        })
})