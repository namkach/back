var topic = require('../controllers/topic.controller');

module.exports = (app) => {
       var path = '/api/topic';
    
       app.get(path + '/all', topic.getAll);
       app.get(path + '/id/:id', topic.getOne);
       app.get(path + '/mypost', topic.getMyPost);
       app.post(path + '/create', topic.create);
}