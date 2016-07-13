/**
 * Created by devds on 12.07.2016.
 */
Template.houses.helpers ({
    house: function () {
        return Houses.find();
    }
});
Template.add_house.events ({
    'click .submit': function() {
        Houses.insert({
            title: $('.house-title').val(),
            city: $('.house-city').val(),
            street: $('.house-street').val(),
            number: $('.house-number').val()
        });
        $('.house-title').val('');
        $('.house-city').val('');
        $('.house-street').val('');
        $('.house-number').val('');
    }
});