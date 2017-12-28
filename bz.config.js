module.exports = {
	name: 'Your connector name',
	description: 'What you connector is.',
	url: 'URL to the service',
	icon: require('./logo'),
	actions: [
		{
			name: 'get-messages',
			description: `All public messages in the user’s (whose access token is being used to make the API call, henceforth referred to as current user) Yammer network. Corresponds to “All” conversations in the Yammer web interface.`,
			inputs: [],
			outputs: [
				{
					name: 'messages',
					type: 'object',
					qty: 'list',
					props: [
						{
							name: 'id',
							type: 'integer',
							qty: 'single'
						},
						{
							name: 'sender_id',
							type: 'integer',
							qty: 'single'
						},
						{
							name: 'replied_to_id',
							type: 'integer',
							qty: 'single'
						},
						{
							name: 'network_id',
							type: 'integer',
							qty: 'single'
						},
						{
							name: 'message_type',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'url',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'web_url',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'body',
							type: 'object',
							qty: 'single',
							props: [
								{
									name: 'parsed',
									type: 'string',
									qty: 'single'
								},
								{
									name: 'plain',
									type: 'string',
									qty: 'single'
								},
								{
									name: 'rich',
									type: 'string',
									qty: 'single'
								}
							]
						},
						{
							name: 'thread_id',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'client_type',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'client_url',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'system_message',
							type: 'boolean',
							qty: 'single'
						},
						{
							name: 'direct_message',
							type: 'boolean',
							qty: 'single'
						},
						{
							name: 'chat_client_sequence',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'notified_user_ids',
							type: 'integer',
							qty: 'list',
						},
						{
							name: 'system_message_properties',
							type: 'object',
							qty: 'list',
							props: [
								{
									name: 'subtype',
									type: 'string',
									qty: 'single'
								},
							]
						},
						{
							name: 'privacy',
							type: 'string',
							qty: 'single'
						},
						/*{
							name: 'attachments',
							type: 'string',
							qty: 'single'
						},*/
						{
							name: 'liked_by',
							type: 'object',
							qty: 'list',
							props: [
								{
									name: 'count',
									type: 'integer',
									qty: 'single'
								},
								{
									name: 'names',
									type: 'integer',
									qty: 'list'
								},
								{
									name: 'content_excerpt',
									type: 'string',
									qty: 'single'
								},
								{
									name: 'group_created_id',
									type: 'integer',
									qty: 'single'
								},
							]
						},
						{
							name: 'content_excerpt',
							type: 'string',
							qty: 'single'
						},
						{
							name: 'group_created_id',
							type: 'integer',
							qty: 'single'
						}
					]
				},
			]
		}
	],
	auth: [
		{
			name: 'token',
			required: true,
			hide: false
		},
	]
};
