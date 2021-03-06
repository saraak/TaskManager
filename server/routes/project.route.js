// console.log("routes.js");
const ProjectController = require('../controllers/project.controller');

module.exports = function(app){
    app.post('/api/Projects', ProjectController.findAll);
    app.post('/api/Projects/new', ProjectController.create);
    app.get('/api/Projects/:id', ProjectController.findOne);
    app.put('/api/Projects/:id', ProjectController.update);
    app.delete('/api/Projects/:Project_id', ProjectController.delete);
}