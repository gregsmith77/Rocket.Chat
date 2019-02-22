import { Meteor } from 'meteor/meteor';
import { settings } from '/app/rocketchat-settings';

Meteor.startup(function() {
	settings.onload('Force_SSL', function(key, value) {
		Meteor.absoluteUrl.defaultOptions.secure = value;
	});
});
