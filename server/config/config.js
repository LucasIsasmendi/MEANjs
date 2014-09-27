var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multiv',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://lucasai:lucasai2014@ds061199.mongolab.com:61199/multiv',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}