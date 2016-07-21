Template.houses.helpers ({
    house: () =>  Houses.find()
});
let currentCountry;

Template.add_house.events ({
    'submit #house-add': (e, template) => {
        e.preventDefault();
        Houses.insert({
            title: template.find('.house-title').value,
            // country: template.find("option")[template.find(".initialized").selectedIndex].value,
            city: template.find('.house-city').value,
            street: template.find('.house-street').value,
            number: template.find('.house-number').value
        });
        console.log(template.find(".initialized").selectedIndex);
        console.log(template.find("option"));
        template.find('#house-add').reset();
    }
});
Template.add_house.onRendered(function() {
    currentCountry = $('#country-select').material_select();
        console.log(currentCountry);
});
