Template.LoginPage.rendered = () => $('ul.tabs').tabs();



Template.Login.events({
    'submit #login': function(event, template) {
        event.preventDefault();
        let userEmail = template.find('#email-l').value;
        let userPass = template.find('#password-l').value;

        Meteor.loginWithPassword(userEmail, userPass, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});