Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('houses');
});

Router.route('/profile', function () {
  this.render('login_page');
});

Router.route('/login', function () {
  this.render('login_page');
});

Router.route('/add_house', function () {
  this.render('add_house');
});

Router.route('/userprofile', function () {
  this.render('User_profile');
});