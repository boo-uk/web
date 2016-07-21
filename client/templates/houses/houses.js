Template.houses.helpers ({
    house: () =>  Houses.find()
});

Template.add_house.events ({
    'submit #house-add': (e, template) => {
        e.preventDefault();
        Houses.insert({
            title: template.find('.house-title').value,
            country: template.findAll('#country-select option')[template.find('#country-select').selectedIndex].value,
            city: template.find('.house-city').value,
            street: template.find('.house-street').value,
            number: template.find('.house-number').value,
            checkIn: template.findAll('#check-in-select option')[template.find('#check-in-select').selectedIndex].value
        });
    }
});
Template.add_house.onRendered( () => {
    $('select').material_select();
});
