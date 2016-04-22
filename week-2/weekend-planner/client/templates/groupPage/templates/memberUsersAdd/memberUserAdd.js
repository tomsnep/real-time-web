Template.memberUsersAdd.helpers({

	allUsers: function(){
	    return Meteor.users.find().fetch();
	},

	allUserEmail: function(){
		return this.emails[0].address;
	}
}); 



Template.memberUsersAdd.events({
	
	'click .addMemberUser': function(event) {
		event.preventDefault();

		var groupId = Router.current().params._id; 
		var userEmail = this.emails[0].address;

		Meteor.call('addMemberUser', groupId, userEmail);
	},
});
