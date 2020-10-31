const Router = require('express');
const controllersTrilha = require('./app/controllers/controllersTrilha');
const controllersCaracteristicas = require('./app/controllers/controllersCaracteristicas');

const routes = new Router();

routes.get('/trilhas', controllersTrilha.index)
routes.get('/trilhas/:id', controllersTrilha.selectOne)
routes.post('/trilhas', controllersTrilha.create)
routes.delete('/trilhas/:id', controllersTrilha.delete)
routes.put('/trilhas/:id', controllersTrilha.update)

routes.get('/caracteristicas', controllersCaracteristicas.index)
routes.get('/caracteristicas/:id', controllersCaracteristicas.selectOne)
routes.post('/caracteristicas/:id_trilha', controllersCaracteristicas.create)
routes.delete('/caracteristicas/:id', controllersCaracteristicas.delete)
routes.put('/caracteristicas/:id', controllersCaracteristicas.update)

module.exports = routes;