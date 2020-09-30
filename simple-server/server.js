const express = require('express')

const app = express()

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(8080) //Tot traficul care ajunge pe portul 8080 ajunge la server
