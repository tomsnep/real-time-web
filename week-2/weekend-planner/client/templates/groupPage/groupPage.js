Tracker.autorun(function () {
    Meteor.subscribe("allUserData");
    Meteor.subscribe("Groups");
});

Template.groupPage.helpers({

	name: function() {
		var groupId = Router.current().params._id;
		return Groups.findOne({_id: groupId}).name;
	}
})
