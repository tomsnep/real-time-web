Tracker.autorun(function () {
    Meteor.subscribe("Groups");
});

Template.groupShow.helpers({
	groupShow: function() {
		return Groups.find({users: Meteor.user().emails[0].address})
	}
})