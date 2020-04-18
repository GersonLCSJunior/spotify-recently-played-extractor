require('dotenv/config');
const APPLICATION_KEY = process.env.APPLICATION_KEY;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const { getToken } = require('../../src/controllers/authController');

describe('Auth', () => {
    it('should return an access token', async () => {
        const access_token = await getToken({APPLICATION_KEY, REFRESH_TOKEN});
        expect(access_token).toBeDefined();
    })
})