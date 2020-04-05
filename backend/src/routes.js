const express = require('express')

const routes = express.Router()

routes.post('/users', (req, res) => {
    return res.json({
        olá: 'olá'
    })
})

module.exports = routes