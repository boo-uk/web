// let password = document.getElementById("password");
// let confirm_password = document.getElementById("confirm_password");
//
// function validatePassword(pass, confirm) {
//     if(password.value !== confirm_password.value) {
//         confirm_password.setCustomValidity("Passwords Don't Match");
//     } else {
//         confirm_password.setCustomValidity('');
//     }
// }

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
    },
    'change #password': function(event, template) {
        console.log(event);
        console.log(template);
        // validatePassword();
    },
    'keyup #confirm_password': function(event, template) {
        // validatePassword();
    }
});

