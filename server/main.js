import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  //   function adminUser(userId) {
  //       let adminUser = Meteor.users.findOne({username:"admin"});
  //       return (userId && adminUser && userId === adminUser._id);
  //   }
  //
  //   function registeredUser(userId) {
  //       let registeredUser = Meteor.users.findOne({username:"admin"});
  //       return (userId && adminUser && userId === adminUser._id);
  //   }
    // Meteor.users.allow({
    //     insert: function(userId, lugar){
    //         return adminUser(userId);
    //     },
    //     update: function(userId, lugares, fields, modifier){
    //         return adminUser(userId);
    //     },
    //     remove: function (userId, docs){
    //         return adminUser(userId);
    //     }
    // });
});

Users.allow({
    insert: function(userId, lugar) {
        return true;
    },
    update: function(userId, lugares, fields, modifier) {
        return true;
    },
    remove: function(userId, docs) {
        return true;
    }
});

Meteor.methods({
    logToConsole: function(msg) {
        console.log(msg);
    },
    getUser: (user) => {
        // Meteor.users.find({_id: user});
        // console.log(Users.find(user).fetch());
    },
    getCurrentUser: function(){
        Meteor.users.find({_id: Meteor.userId().fetch()});
        // console.log(Users.find(user).fetch());
    },
    updateCurrentUser: (data) => {
        // console.log(Users.find(user).fetch());
        console.log(data);

        Meteor.users.upsert(Meteor.userId(), data);
    }
});
