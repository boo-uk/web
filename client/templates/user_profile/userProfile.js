base64 = function(element, callback) {
    let reader = new FileReader();
    let file = element.files[0];
    if (file) {
        reader.readAsDataURL(file);
        reader.onload = function(event) {
            callback(event.target.result);
        };
    }
};
Template.User_profile.events({
    'submit form': function(event, template) {
        event.preventDefault();

        let registerData = {
            firstName: template.find('#first_name').value,
            lastName: template.find('#last_name').value,
            avatar: ''
        };
        Meteor.call('updateCurrentUser', {$set: {profile: registerData}});


        base64(template.find('#fileUpload'), console.log);
        // get the file


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


