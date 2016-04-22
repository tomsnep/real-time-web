Template.groupCreate.events({
	
	'submit #groupCreate': function(event) {
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access!');
		} else {
			var name = event.target.name.value;
			console.log(event.target.name.value);
			
			Meteor.call('groupCreate', name);
		}

		return false;
	}
})