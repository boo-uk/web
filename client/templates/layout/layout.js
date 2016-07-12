Template.layout.rendered = ()=>{
    $('ul.tabs').tabs();
};

Template.layout.events({
    'click #logout': ()=>{
        Meteor.logout((err)=>{
            console.log(err)
        })
    },
    'click #add-item': ()=>{

        Houses.insert({
            createdAt: new Date()
        },()=>{
            console.log('addItem');
        });
    }
});

Template.houses.helpers({
    houseItems: ()=> {
        Houses.find({});
    }
});