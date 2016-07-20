Template.User_profile.events({
    'submit form': function(event, template) {
        event.preventDefault();

        let registerData = {
            firstName: template.find('#first_name').value,
            lastName: template.find('#last_name').value,
            avatar: ''
        };
        let reader = new FileReader();
        let file = template.find('#fileUpload').files[0];

        // get the file
        reader.onload = function(event) {
        // event.target.result is the base64 string
            registerData.avatar = event.target.result;
            Meteor.call('updateCurrentUser', {$set: {profile: registerData}});
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        // Meteor.call("logToConsole", "Hello World");

        // Meteor.call('getUser', '{_id: Meteor.userId(), {$set: {profile: data}}}');
    }
});
Template.User_profile.helpers({
    user: function() {
        // Meteor.call('getCurrentUser');
        return Meteor.call('getCurrentUser');
    }
});


