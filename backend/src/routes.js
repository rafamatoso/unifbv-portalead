const Router = require('express').Router;

// import all controllers
// const SessionController = require('./controllers/SessionController');

const routes = Router();

// Add routes
routes.get('/', (req, res) => {
    return res.json({ status: 'Server run' })
});

// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
