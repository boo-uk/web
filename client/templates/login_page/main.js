Template.login_page.rendered = ()=>{
  $('ul.tabs').tabs();
};

Template.register.events({
    'submit #register': function (event, template) {
        event.preventDefault();
        let userEmail = template.find('#email-r').value;
        let userPass = template.find('#password-r').value;
        Accounts.createUser({
            email: userEmail,
            password: userPass
        }, function (err) {
            if (err){
                console.log(err)
            }
        })
    }
});

Template.login.events({
    'submit #login': function (event, template) {
        event.preventDefault();
        let userEmail = template.find('#email-l').value;
        let userPass = template.find('#password-l').value;

        Meteor.loginWithPassword(userEmail, userPass, (err)=>{
            if (err){
                console.log(err)
            }
        })
    }
});