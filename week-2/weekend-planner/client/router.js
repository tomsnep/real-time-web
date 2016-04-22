Router.route('/', function() {
	this.render('Home');
});

Router.route('/activities', function() {
	this.render('activitySummary');
});

Router.route('group', {
  path: '/group/:_id',
  template: 'groupPage'
});
