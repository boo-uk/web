Template.masterLayout.rendered = ()=>{
    $('ul.tabs').tabs();
};

Template.masterLayout.events({
    'click #logout': ()=>{
        Meteor.logout((err)=>{
            console.log(err)
        })
    }
});