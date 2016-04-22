Template.activityAdd.events({
	'submit #activityAddForm': function(event) {
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access');
		} else {
			var groupId = Router.current().params._id;
			var name = event.target.name.value;
			var location = event.target.location.value;
			var date = event.target.date.value;

			Meteor.call('activityAdd', groupId, name, location, date);
		}
		return false
	}
})