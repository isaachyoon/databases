var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var message;
      models.messages.get(function(messages) {
        message = messages;
        console.log('message', message);
        message = JSON.stringify(message);

        res.send(message);
      });


      // console.log(req.body);
      //console.log(req[0]);
      // console.log(req[0].message);

      // res.send(err, data, body);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('CONTROLLERS MESSAGES POST');
      models.messages.post(req.body);
      res.send();
      // console.log('controller messages post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('controller users get');
    },
    post: function (req, res) {
      console.log('CONTROLLERS USERS POST');
      var user = req.body.username;
      var body = '';
            // console.log('controller users post');
      // console.log(req.body.username);
      // console.log(Object.keys(req));
      // after handling the message
      models.users.post(user);
      res.send();
    }
  }
};

