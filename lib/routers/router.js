Router.route('/', function () {

  // use the template named ApplicationLayout for our layout
  this.layout('layout');

  // render the Post template into the "main" region
  // {{> yield}}
  // this.render('Post');

  // render the PostAside template into the yield region named "aside"
  // {{> yield "aside"}}
  // this.render('PostAside', {to: 'aside'});

  // render the PostFooter template into the yield region named  "footer"
  // {{> yield "footer"}}
  // this.render('PostFooter', {to: 'footer'});
});

Router.route('/login', function () {
  this.render('login_page');
});

Router.route('/add_house', function () {
  this.render('add_house');
});