require('dotenv/config');
const APPLICATION_KEY = process.env.APPLICATION_KEY;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const { getToken } = require('../../src/authController');

describe('Auth', () => {
    it('should return an invalid_client error', async () => {
        const access_token = await getToken({APPLICATION_KEY: "123", REFRESH_TOKEN});
        expect(access_token.error.error).toBe("invalid_client");
    })

    it('should return an error', async () => {
        const access_token = await getToken({APPLICATION_KEY, REFRESH_TOKEN: "454"});
        expect(access_token.error.error).toBe("invalid_grant");
    })

    it('should return an access token', async () => {
        const access_token = await getToken({APPLICATION_KEY, REFRESH_TOKEN});
        expect(access_token).toBeDefined();
    })
})