export default {
	jwt: {
		secret: process.env.APP_SECRET || 'default',
		expiresIn: process.env.APP_EXPIRE || '999d',
	},
};
