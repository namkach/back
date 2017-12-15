var path = require("path");
var Upload = require('mongoose').model('Upload');

exports.getImg = (req, res ,next) => {
    Upload.find( (err, upload) => {
        if (err) {
               console.log('Failure');
               return next(err);
        }
        else {
               console.log('Success');
               res.json(upload);
        }
 });
}

exports.upload = (req, res) => {
    res.sendFile((path.join(__dirname + '/../views/upload.html')));
}
