Groups = new Mongo.Collection('Groups');

activitySchema = new SimpleSchema({
	_id: {
		type: String,
		optional: true
	},
	name: {
		type: String,
		optional: true
	},
	admin: {
		type: String,
		optional: true
	},
	location: {
		type: String,
		optional: true
	},
	date: {
		type: Date,
		optional: true
	},
	createdAt: {
		type: Date,
		optional: true
	},
	participatingUsers: {
		type: [String],
		optional: true
	},
	interestedUsers: {
		type: [String],
		optional: true
	}
});

Groups.schema = new SimpleSchema({
	name: {
		type: String
	},
	users: {
		type: [String],
		optional: true
	},
	activities: {
		type: [activitySchema],
		optional: true
	},
	createdAt: {
		type: Date
	}
});

Groups.attachSchema(Groups.schema);

Meteor.methods({
	groupCreate: function(name) {

			Groups.insert({
				name: name,
				users: [Meteor.user().emails[0].address],
				createdAt: new Date(),
			});
	},
	addMemberUser: function(groupId, userEmail) {

		Groups.update({
			_id: groupId }, 
			{ $push: {
				users: userEmail
			}
		});
	},
	deleteMemberUser: function(groupId, userEmail) {

		Groups.update({
			_id: groupId }, 
			{ $pull: {
				users: userEmail
			}
		});
	},	
	activityAdd: function(groupId, name, location, date) {
		Groups.update({
			_id: groupId },
			{ $push: {
				activities: {
					_id: new Meteor.Collection.ObjectID().valueOf(),
					name: name,
					location: location,
					date: date,
					admin: Meteor.user().emails[0].address,
					createdAt: new Date(),
				}
			}
		});
	},
	activityAddParticipatingUsers: function(activityId, groupId, user) {
		Groups.update({
			_id: groupId, 
			'activities._id': activityId },
			{ $push: {
				'activities.$.participatingUsers': user
			}
		});
	},
	activityAddInterestedUsers: function(activityId, groupId, user) {
		Groups.update({
			_id: groupId, 
			'activities._id': activityId },
			{ $push: {
				'activities.$.interestedUsers': user
			}
		});
	}
});

Meteor.publish("allUserData", function () {
  return Meteor.users.find({}, {fields: {'emails': 1}});
});

Meteor.publish("Groups", function () {
  return Groups.find({});
});

