const UserController = require('../controllers/user.controller');

module.exports = function(app){
    app.post('/api/account/signup', UserController.create);
    app.post('/api/account/login', UserController.find);
}