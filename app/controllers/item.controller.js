var Item = require('mongoose').model('Item');
var path = require("path");

exports.getItems = (req, res, next) => {
    Item.find((err, item) => {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(item);
            res.json(item);
        }
    });
}


exports.create = (req, res, next) => {
    var item = new Item(req.body);
    item.save((err) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(item);
        }
    });
}
