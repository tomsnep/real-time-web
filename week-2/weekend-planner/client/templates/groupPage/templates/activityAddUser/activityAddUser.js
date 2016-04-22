Template.activityAddUsers.events({
	'submit #activityAddParticipatingUsers': function(event) {
		event.preventDefault();
		var event = event.target;

		if (!Meteor.userId()) {
			throw new Meteor.Error('No Access');
		} else {

			var groupId = Router.current().params._id; 
			var user = Meteor.user().emails[0].address;
			var activityId;
			
			//Get activityId
			(function() {
				
				var parentofParent = event.parentNode; 
				var parentofSelected = parentofParent.parentNode;
				var children = parentofSelected.childNodes;
			
				for (var i=0; i < children.length; i++) {
					
				    if (children[i].className == "activityId") {
				        activityId = children[i].innerHTML;
				        break;
				    }
				}
		 	})();
			Meteor.call('activityAddParticipatingUsers', activityId, groupId, user);
		}
	},
	'submit #activityAddInterestedUsers': function(event) {
		event.preventDefault();
		var event = event.target;

		if (!Meteor.userId()) {
			throw new Meteor.Error('No Access');
		} else {

			var groupId = Router.current().params._id; 
			var user = Meteor.user().emails[0].address;
			var activityId;
			
			//Get activityId
			(function() {
				
				var parentofParent = event.parentNode; 
				var parentofSelected = parentofParent.parentNode;
				var children = parentofSelected.childNodes;
			
				for (var i=0; i < children.length; i++) {
					
				    if (children[i].className == "activityId") {
				        activityId = children[i].innerHTML;
				        break;
				    }
				}
		 	})();

			Meteor.call('activityAddInterestedUsers', activityId, groupId, user);
		}
	}
})

