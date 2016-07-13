Template.header.helpers({
    userMail: () => Meteor.user().emails[0].address
});
Template.header.onRendered(function(){
});

