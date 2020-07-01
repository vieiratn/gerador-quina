const express = require('express')
const game = require('./controllers/quina')

const router = express.Router()

router.get('/', (req, res) => {
    return res.status(200).json({ 
        description: "Api that returns an array with a guess for the Quina Lottery.",
        author: "Thiago Nascimento",
        endpoint: "/quina",
        status: "Api's up and running."
    })
})

router.get('/quina', (req, res) => {
    return res.status(200).json({ guess: game.makeGame() })
})

module.exports = router