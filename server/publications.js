// Meteor.publish('users', function () {
//     return Meteor.users.find();
// });

Meteor.publish('Houses', () => Houses.find() );
