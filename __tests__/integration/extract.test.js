require('dotenv/config');
const APPLICATION_KEY = process.env.APPLICATION_KEY;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const { getToken } = require('../../src/controllers/authController');
const { getRecentlyPlayed } = require('../../src/controllers/extractController');

describe('Extract', () => {
    it('should return a list of 50 musics', async () => {
        const access_token = await getToken({APPLICATION_KEY, REFRESH_TOKEN});
        const music_list = await getRecentlyPlayed(access_token);
        expect(music_list).toHaveLength(50);
    })
})