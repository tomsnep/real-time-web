Activities = new Mongo.Collection('Activities');

Meteor.methods({
	addActivity: function(name, location, date){
		// if user is not logged in, block request
		if(!Meteor.userId()){
			throw new Meteor.Error('U moet ingelogd zijn om een activiteit aan te maken');
		} else {
			Activities.insert({
			name: name,
			location: location,
			date: date,
			createdAt: new Date(),
			createdBy: userId
		});
		}
	}
})