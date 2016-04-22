Template.activityOverview.helpers({
	activities: function(){
		
		var groupId = Router.current().params._id;
		return Groups.findOne({_id: groupId}).activities;
	},
	participatingUsers: function() {

		var groupId = Router.current().params._id;		
		var test = Groups.findOne({_id: groupId}); 
		
		for (var i = 0; i < test.activities.length; i++) {
			if(test.activities[i]._id == this._id) {
				var participatingUsers = test.activities[i].participatingUsers;
				return test.activities[i].participatingUsers;
			}
		};
	},
	interestedUsers: function() {
		
		var groupId = Router.current().params._id;
		var test = Groups.findOne({_id: groupId}); 
		
		for (var i = 0; i < test.activities.length; i++) {
			if(test.activities[i]._id == this._id) {
				var interestedUsers = test.activities[i].interestedUsers;
				return test.activities[i].interestedUsers;
			}
		};
	}
})