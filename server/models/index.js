var db = require('../db');




module.exports = {
  messages: {
    get: function(callback) {
      // open a connection to the db
      var connection = db.sql();
      connection.connect();

      // query the database for all messages
      connection.query('SELECT * FROM messages', function(err, rows, fields) {
        if (err) throw err;

        // run the callback
        callback(rows);

        // end connection to db
        connection.end();
      });
    },

    post: function(data, callback) {
      // open a connection to the db
      var connection = db.sql();
      connection.connect();

      // insert message into database
      connection.query('INSERT INTO messages SET ?', data, function(err) {
        if (err) throw err;
        
        callback();
        
        // end connection to db
        connection.end();
      });
    }
  },

  users: {
    get: function(callback) {
      // open a connection to the db
      var connection = db.sql();
      connection.connect();

      // query the database for all users
      connection.query('SELECT * FROM users', function(err, rows, fields) {
        if (err) throw err;

        // run the callback
        callback(rows);

        // end connection to db
        connection.end();
      });
    },
    post: function(data, callback) {
      // open a connection to the db
      var connection = db.sql();
      connection.connect();

      // insert user into database
      connection.query('INSERT INTO users SET ?', data, function(err) {
        if (err) throw err;
        
        callback();
        
        // end connection to db
        connection.end();
      });
    }
  }
};

