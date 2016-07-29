Router.configure({
    layoutTemplate: 'MasterLayout'
    // notFoundTemplate: 'notFound'
});

Router.map(function() {
    this.route('LoginPage', {path: '/login'});
    this.route('UserProfile', {path: '/profile'});
    this.route('Houses', {path: '/'});
    this.route('Houses', {path: '/my_houses', name: 'myHouses'});
    this.route('add_house');
    this.route('HouseInfo', {
        path: '/houses/:_id',
        data: function() {
            return Houses.findOne({_id: this.params._id});
        }
    });
});
