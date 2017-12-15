var comment = require('../controllers/comment.controller');

module.exports = (app) => {
       var path = '/api/comment';
    
       app.get(path + '/all', comment.getAll);
       app.get(path + '/id/:id', comment.getOne);
       app.get(path + '/mypost', comment.getMyPost);
       app.post(path + '/create', comment.create);
}