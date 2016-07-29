Template.Header.helpers({
    userMail: () => Meteor.user().emails[0].address
});

Template.Header.onRendered(function() {
    setTimeout(() => $(this.find('.dropdown-button')).dropdown(), 2000);
});