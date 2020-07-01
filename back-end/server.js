const express = require('express')
const router = require('./src/routes')

const app = express()

app.use(router)

app.listen(3001, () => {
    console.log('Server up and running on port 3001.')
})