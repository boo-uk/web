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
    logToConsole: (msg) => console.log(msg),
    getUser: (user) => Meteor.users.findOne({_id: user}),
    getCurrentUser: () => Meteor.users.findOne({_id: Meteor.userId()}),
    updateCurrentUser: (data) => Meteor.users.upsert(Meteor.userId(), data)
});
