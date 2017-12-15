var item = require('../controllers/upload.controller');
var uploads = require('../controllers/upload.controller');
var bodyParser = require('body-parser');
var multer = require('multer');
var UploadSchema = require('mongoose').model('Upload');

import index from '../controllers/index.controller';

module.exports = (app) => {
    var path = '/api/uploads';

    app.use(bodyParser.json());
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: (req, file, cb) =>{
            cb(null, './uploads')
        },
        filename: (req, file, cb) => {
            var datetimestamp = Date.now();
            cb(null, 'img_' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
        }
    });
    var upload = multer({ //multer settings
        storage: storage
    }).single('userPic');
    /** API path that will upload the files */
    app.post(path, (req, res) => {
        upload(req, res, (err) => {
            if (err) {
                res.json({ error_code: 1, err_desc: err });
                return;
            }
            var uploadschema = new UploadSchema(req.file);
            uploadschema.save((err) => {
                if (err) {
                       console.log('Failure');
                       return next(err);
                }
                else {
                       console.log('Success');
                       res.json(uploadschema);
                }
            });
            //res.json(req.file);
        })

    });

    app.get(path + '/getimg' , uploads.getImg);
       //app.post(path + '/', uploads.upload);
      app.get('/upload', uploads.upload);

}
