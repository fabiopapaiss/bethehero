const express = require('express')

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const connection = require('./database/connection')

const routes = express.Router()

routes.post('/sessions', sessionController.createSession)

routes.get('/ongs', OngController.index) // Rota para listar todas as ONGs
routes.post('/ongs', OngController.createOng) // Rota para salvar uma ONG

routes.get('/profile', profileController.index) // Rota para listar casos específicos de uma ONG

routes.get('/incidents', incidentController.index) // Rota para listar todos os incidents
routes.post('/incidents', incidentController.createIncident) // Rota para criar um incident
routes.delete('/incidents/:id', incidentController.delete) // Rota para deletar um incident


module.exports = routes