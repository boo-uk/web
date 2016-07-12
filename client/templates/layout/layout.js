Template.layout.rendered = ()=>{
    $('ul.tabs').tabs();
};

Template.layout.events({
    'click #logout': ()=>{
        Meteor.logout((err)=>{
            console.log(err)
        })
    }
});