module.exports = {
	name: 'MongoDB',
	description: `MongoDB (from humongous) is a free and open-source cross-platform document-oriented database program. ` +
				 `Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. ` + 
				 `MongoDB is developed by MongoDB Inc., and is published under a combination of the GNU Affero General ` + 
				 `Public License and the Apache License.`,
	url: 'https://www.mongodb.com',
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
