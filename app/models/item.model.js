const  mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
      name: {
            type: String,
            required: true,
            trim: true
      },
      description: {
            type: String
      },
      lookfor:  String,
      send: String,
      category: String,
      postby: {
            type: String,
            trim: true
      },
      create: {
            type: Date,
            default: Date.now
      }
});

mongoose.model('Item', ItemSchema);
