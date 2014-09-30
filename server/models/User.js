var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');


var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  salt: String,
  hashed_pwd: String,
  roles: [String]
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joe');
      User.create({firstName: 'Joe', lastName: 'Doe', username: 'joe', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'steve');
      User.create({firstName: 'Steve', lastName: 'Jobs', username: 'apple', salt: salt, hashed_pwd: hash, roles: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'larry');
      User.create({firstName: 'Larry', lastName: 'Ellison', username: 'oracle', salt: salt, hashed_pwd: hash});
    }
  })
};

exports.createDefaultUser = createDefaultUsers;