Meteor.startup(() => {
    i18n.setDefaultLanguage('uk');

    fs = Npm.require('fs');

    fs.readdir('./../../../../../lib/i18n', function(err, items) {
        console.log(items);

        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
            fs.readFile('./../../../../../lib/i18n/' + items[i], 'utf8', function(err, contents) {
                console.log(contents);
            });
        }
    });
});
