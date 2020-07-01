module.exports = {
    makeGame: () => {
    
        const game = [];
    
        function randNumber(min = 1, max = 80) {
            let num = Math.random() * max + min
            return Math.floor(num)
        }

        function sortNumber(n1, n2) {
            return (n1 - n2)
        }
        
        while (game.length < 5) {
            let ball = randNumber()
            if (!game.includes(ball)) {
                game.push(ball)
            }
        }
            
        return game.sort(sortNumber)
    }
}
