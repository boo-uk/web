Template.houses.helpers ({
    house: ()=>  Houses.find()
})

Template.add_house.events ({
    'click .submit': (e, template)=> {
        Houses.insert({
            title: template.find('.house-title').value,
            city: template.find('.house-city').value,
            street: template.find('.house-street').value,
            number: template.find('.house-number').value
        });
        template.find('#add-house').reset();
    }
});