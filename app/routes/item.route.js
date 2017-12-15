var item = require('../controllers/item.controller');

module.exports = (app) => {
       var path = '/api/item';
    
       app.get(path + '/all', item.getItems);
       app.post(path + '/create', item.create);
}