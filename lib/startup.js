getUserLanguage = function() {
    // Put here the logic for determining the user language

    return 'uk';
};

if (Meteor.isServer) {
    Meteor.startup(() => {
        i18n.setDefaultLanguage('uk');

        fs = Npm.require('fs');

        fs.readdir('./../../../../../lib/i18n', function (err, items) {
            console.log(items);

            for (let i = 0; i < items.length; i++) {
                console.log(items[i]);
                fs.readFile('./../../../../../lib/i18n/' + items[i], 'utf8', function (err, contents) {
                    console.log(contents);
                });
            }
        });
    });
}
if (Meteor.isClient) {
    Meteor.startup(function() {
        Session.set("showLoadingIndicator", true);

        TAPi18n.setLanguage(getUserLanguage())
            .done(function() {
                Session.set("showLoadingIndicator", false);
            })
            .fail(function(errorMessage) {
                // Handle the situation
                console.log(errorMessage);
            });
    });
}
