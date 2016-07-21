function validatePassword(pass, confirm) {
    if(pass.value !== confirm.value) {
        confirm.setCustomValidity("Passwords Don't Match");
    } else {
        confirm.setCustomValidity('');
    }
}

Template.register.events({
    'submit #register': function(event, template) {
        event.preventDefault();
        let userEmail = template.find('#email').value;
        let userPass = template.find('#password').value;
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
    },
    'change #password': function(event, template) {
        validatePassword(event.target, template.find('#password'));
    },
    'keyup #confirm-password': function(event, template) {
        validatePassword(template.find('#password'), event.target);
    }
});

