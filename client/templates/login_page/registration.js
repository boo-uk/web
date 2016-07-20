
Template.register.events({
    'submit #register': function(event, template) {
        event.preventDefault();
        let userEmail = template.find('#email-r').value;
        let userPass = template.find('#password-r').value;
        let userRole = 1;
        Accounts.createUser({
            email: userEmail,
            password: userPass,
            role: userRole,
            info: {
                img: '',
                firstName: '',
                lastName: '',
                age: '',
                country: '',
                date_of_birth: Date,
                gender: String,
            }

        }, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});