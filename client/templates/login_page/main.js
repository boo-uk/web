Template.login_page.rendered = ()=>{
  $('ul.tabs').tabs();
};
Template.login_page.events({
    'click #logout': ()=>{
        Meteor.logout((err)=>{
            console.log(err)
        })
    }
});