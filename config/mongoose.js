const mongoose = require('mongoose');

module.exports = function(){
       var config = require('./config');
       mongoose.set('debug', config.debug);
       mongoose.Promise = global.Promise;
       const db = mongoose.connect(config.mongoUri, {
              useMongoClient: true
              /* other options */
       });

       require('../app/models/user.model');
       require('../app/models/post.model');
       require('../app/models/item.model');
        require('../app/models/upload.model');
       return db;
}
