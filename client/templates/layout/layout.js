Template.MasterLayout.rendered = () => {
    $('ul.tabs').tabs();
};

Template.MasterLayout.events({
    'click #logout': () => {
        Meteor.logout((err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});
