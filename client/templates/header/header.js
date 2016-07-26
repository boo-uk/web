Template.header.helpers({
    userMail: () => Meteor.user().emails[0].address
});

Template.header.onRendered(function() {
    setTimeout(() => $(this.find('.dropdown-button')).dropdown(), 2000);
});