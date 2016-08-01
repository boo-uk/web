Template.Header.helpers({
    userMail: () => Meteor.user().emails[0].address,
    langListEn: () => _.map(TAPi18n.languages_names, (b) => {
        return b[0];
    }),
    langList: () => _.map(TAPi18n.languages_names, (b) => {
        return b[1];
    }),
    langCodes: _.keys(TAPi18n.languages_names)
});
Template.LangSwitcher.helpers({
    langListEn: () => _.map(TAPi18n.languages_names, (b) => {
        return b[0];
    }),
    langList: () => _.map(TAPi18n.languages_names, (b) => {
        return b[1];
    }),
    langCodes: _.keys(TAPi18n.languages_names)
});

Template.Header.onRendered(function() {
    setTimeout(function() {
        $(this.find('.dropdown-button')).dropdown();
        $('select').material_select();
    }, 200);
});
