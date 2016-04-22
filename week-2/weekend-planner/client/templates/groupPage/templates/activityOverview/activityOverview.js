Template.activityOverview.helpers({
	activities: function(){
		var groupId = Router.current().params._id;
		return Groups.findOne({_id: groupId}).activities;
	},
	participatingUsers: function() {
		var groupId = Router.current().params._id;
		// console.log('participatingUsers is fired');
		console.log(this);
		
		//query tries, wanted to save this for later investigation
		
		// console.log(Groups.findOne(	{_id: groupId}).activities,{'activities_id' : 'this._id'}.participatingUsers;

		// // Groups.findOne({$and: [ {_id: "873CRSemW8m3w3uDT"}, {'activities._id': '6791c824a6fee2a0c59a2808'}]}),{'activities._id': '6791c824a6fee2a0c59a2808'}.participatingUsers

		// // Groups.findOne({_id: "873CRSemW8m3w3uDT"},{activities: {$elemMatch:{'activities_id': '6791c824a6fee2a0c59a2808'}}}),{'activities._id': '6791c824a6fee2a0c59a2808',participatingUsers}

		// // Groups.findOne({_id: "873CRSemW8m3w3uDT"}).activities,{$elemMatch: {'activities._id': '6791c824a6fee2a0c59a2808',participatingUsers: []}}

		// // Groups.findOne({_id: "873CRSemW8m3w3uDT"}).activities,{'activities_id': {$in: ['6791c824a6fee2a0c59a2808']}}

		// db.getCollection('operations').find({}, {savedOrder: {$elemMatch:{productId: "f5mhs8c2pLnNNiC5v"}}});

		// console.log(Groups.findOne(	{_id: "873CRSemW8m3w3uDT"}).activities[{activities: {$elemMatch: {'activities_id' : '6791c824a6fee2a0c59a2808'}}}]);

		// console.log(Groups.findOne(	{_id: "873CRSemW8m3w3uDT"}), {activities: {$elemMatch: {'activities_id' : '6791c824a6fee2a0c59a2808'}}}.participatingUsers);
		// var groupId = Router.current().params._id;
		// console.log(Groups.findOne({_id: groupId, 'activities._id': this._id}).participatingUsers);
		// return Groups.findOne({_id: groupId, 'participatingUsers._id': this._id}).activities.participatingUsers;

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
		console.log(this);
	
		var test = Groups.findOne({_id: groupId}); 
		
		for (var i = 0; i < test.activities.length; i++) {
			if(test.activities[i]._id == this._id) {
				var interestedUsers = test.activities[i].interestedUsers;
				return test.activities[i].interestedUsers;
			}
		};
	}
})