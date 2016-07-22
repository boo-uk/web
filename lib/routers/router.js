Router.configure({
    layoutTemplate: 'masterLayout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function() {
    this.render('houses');
});

Router.route('/houses', function() {
    this.render('houses');
});

Router.route('/profile', function() {
    this.render('User_profile');
});

Router.route('/login', function() {
    this.render('login_page');
});

Router.route('/add_house', function() {
    this.render('add_house');
});

Router.route('/houses/:_id', function() {
    this.render('house_info', {
        data: function() {
            return Houses.findOne({_id: this.params._id});
        }
    });
});