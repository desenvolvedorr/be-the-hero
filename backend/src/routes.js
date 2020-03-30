const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// rota de login 
routes.post('/sessions', SessionController.create);

// rota para listar ongs
routes.get('/ongs', OngController.index);
// rota para criar as ongs
routes.post('/ongs', OngController.create);

// rota para listar todos os Casos/Incidents de uma ONG especifica
routes.get('/profile', ProfileController.index);

// lista incidents
routes.get('/incidents', IncidentController.index);
// cria incidents
routes.post('/incidents', IncidentController.create);
// deleta incidents
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;