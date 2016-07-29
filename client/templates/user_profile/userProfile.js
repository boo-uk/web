Template.UserProfile.events({
    'submit form': function(event, template) {
        event.preventDefault();

        let registerData = {
            firstName: template.find('#first_name').value,
            lastName: template.find('#last_name').value,
        };

        let setAvatar = function(data) {
            registerData.avatar = data;
            Meteor.call('updateCurrentUser', {$set: {profile: registerData}});
        };

        base64(template.find('#fileUpload'), setAvatar);

        // get the file


        // Meteor.call("logToConsole", "Hello World");

        // Meteor.call('getUser', '{_id: Meteor.userId(), {$set: {profile: data}}}');
    }
});

Template.UserProfile.onRendered(() => {
    $('#edit-profile').find('input').each((e, t) => {
        t.onchange;
        console.log(e, t, this, $(this));
    });
});

Template.UserProfile.helpers({
    user: () => Users.findOne({_id: Meteor.userId()})
});

Template.registerHelper('log', (what) => console.log(what));

