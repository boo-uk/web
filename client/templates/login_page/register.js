Template.register.events({
    'submit #register': function (event, template) {
        event.preventDefault();
        let userEmail = template.find('#email-r').value;
        let userPass = template.find('#password-r').value;
        Accounts.createUser({
            email: userEmail,
            password: userPass
        }, function (err) {
            console.log(err)
        })
    }
});