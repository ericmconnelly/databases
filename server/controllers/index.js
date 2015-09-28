var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(rows) {
        var result = {
          results: rows
        };
        
        var json = JSON.stringify(result);

        res.status(200).end(json);
      });
    },

    post: function(req, res) {
      models.messages.post(req.body, function() {
        res.status(201).end();
      });
    }
  },

  users: {
    get: function(req, res) {
      models.users.get(function(rows) {
        var result = {
          results: rows
        };
        
        var json = JSON.stringify(result);

        res.status(200).end(json);
      });
    },

    post: function(req, res) {
      models.users.post(req.body, function() {
        res.status(201).end();
      });
    }
  }
};

