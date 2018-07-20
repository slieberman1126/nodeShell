const fs = require('fs');
module.exports = (fileName, done) => {
  fs.readFile(fileName, 'utf8', (err, done) => {
    if (err) {
      done(err.stack);
    } else {
      done(data);
    }
  });
};
