var User = require('mongoose').model('User');
var path = require("path");

exports.getUsers = (req, res, next) => {
       User.find((err, user) => {
              if (err) {
                     console.log('Failure');
                     return next(err);
              }
              else {
                     console.log('Success');
                     res.json(user);
              }
       });
}

exports.getPro = (req, res, next) => {
    var user = new User(req.body);
    User.findOne({username : req.params.username},(err, user) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log('Success');
                  res.json(user);
           }
    });
}





exports.create = (req, res, next) => {

    var user = new User(req.body);
    user.save((err) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log('Success');
                  res.json(user);
           }
    });
}

exports.edit = (req, res, next) => {
    User.update({_id: req.params.id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastlame,
        username: req.body.username,
        email: req.body.email,
        // password: req.body.password
    }, function(err, docs){
            if(err) res.json(err)
            else    res.status(204).end()
    })
}

exports.login = (req, res) => {
    if (!req.user) {
        res.redirect('/');
    }
    else {
        res.redirect('/post');
    }
}



exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}


exports.saveOAuthUserProfile = (req, profile, done) => {
    User.findOne({
               provider: profile.provider,
               providerId: profile.providerId
    }, function(err, user) {
           if (err) return done(err);
           else {
                  if (!user) {
                         var possibleUsername = profile.username
     || (profile.email ? profile.email.split('@')[0] : '');
                         console.log('NAME: ' + profile.username);
                 User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
                         profile.username = availableUsername;
                         user = new User(profile);
                         user.save((err) => {
                                if (err) { return req.res.redirect('/login'); }
                                return done(err, user);
                         })
                     });
                  }
                 else { return done(err, user); }
            }
    });
}
