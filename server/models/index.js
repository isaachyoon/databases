var db = require('../db');

// connect database to server
db.connection.connect();

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data) {
      // console.log('data from models', data);
      console.log('MODELS MESSAGES POST');
      var message = data.message;
      var room = data.roomname;
      var username = data.username;

      //select user.id from users inner join Messages on (user.id = messages.userID)
      
      db.connection.query('insert into messages (msg, roomname, userID) values ("' + message + '", "' + room + '", (select id from users where username = "' + username + '"))', function(err, rows) {
        if (err) {
          throw err;
        }
      });

      //userID? need to create a room number
      // db.connection.query('insert into messages (userID) values ((select id from users where username = "' + username + '"))', function(err, rows) {
      //   console.log('data received from db messages table');
      // });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {
      console.log('MODELS USERS POST');
      db.connection.query('insert into users (username) values ("' + user + '")', function(err, rows) {
        if (err) {
          throw err;
        }
      });
    }
  }
};

