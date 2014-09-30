var mongoose = require('mongoose'),
  crypto = require('crypto'),
  encrypt = require('../utilities/encryption');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback(){
    console.log('multiv	 db opened');
  });

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

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joe');
      User.create({firstName:'Joe', lastName:'Doe', username:'joe', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'steve');
      User.create({firstName:'Steve', lastName:'Jobs', username:'apple', salt: salt, hashed_pwd: hash, roles:[]});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'larry');
      User.create({firstName:'Larry', lastName:'Ellison', username:'oracle', salt: salt, hashed_pwd: hash});
    }
  })
}
