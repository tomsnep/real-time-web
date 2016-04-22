// Template.addActivity.events({

// 	'submit #addActivityForm': function(event) {
		
// 		if(!Meteor.userId()){
// 	      throw new Meteor.Error('No Access!');
// 	    } else {
// 	    	var name = event.target.name.value,
// 			location = event.target.location.value,
// 			date = event.target.date.value;

// 			Meteor.call('addActivity', name, location, date)
// 	    }

// 		// console.log(event.target.name.value);
// 		// console.log(event.target.location.value);
// 		// console.log(event.target.date.value);
		

// 		// var name = event.target.name.value,
// 		// 	location = event.target.location.value,
// 		// 	date = event.target.date.value;

// 		// Meteor.call('addActivity', name, location, date)

// 		return false;
// 	}

// })