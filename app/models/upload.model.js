import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UploadSchema = new Schema({

    filename: String,
    mimetype: String,
    encoding: String,
    destination: String,
    path: String,
    size: String

});

mongoose.model('Upload', UploadSchema);
