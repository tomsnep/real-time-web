Tracker.autorun(function () {
    Meteor.subscribe("allUserData");
    Meteor.subscribe("Groups");
});


Template.memberUsers.helpers({
	memberUsers: function() {
		var groupId = Router.current().params._id;
		return Groups.findOne({_id: groupId}).users;
	}
 });

Template.memberUsers.events({
	'click .deleteMemberUser': function(event) {
		event.preventDefault();

		var groupId = Router.current().params._id; 
		var userEmail = this.valueOf();

		Meteor.call('deleteMemberUser', groupId, userEmail);
	}
});