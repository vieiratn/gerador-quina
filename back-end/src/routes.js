const express = require('express')
const cors = require('cors')
const game = require('./controllers/quina')

const router = express.Router()

router.get('/', (req, res) => {
    return res.status(200).json({ 
        description: "Return an array with a guess for Quina lottery.",
        author: "Thiago Nascimento",
        endpoint: "/quina",
        method: "GET",
        status: "Api's up and running."
    })
})

router.get('/quina', cors(), (req, res, next) => {
    return res.status(200).json({ guess: game.makeGame() })
})

module.exports = router