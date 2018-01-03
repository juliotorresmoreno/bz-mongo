module.exports = {
	name: 'Your connector name',
	description: 'What you connector is.',
	url: 'URL to the service',
	icon: require('./logo'),
	actions: require('./actions.json'),
	auth: [
		{
			name: 'url',
			required: true,
			hide: false
		},
	]
};
