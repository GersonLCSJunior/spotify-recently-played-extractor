const rp = require('request-promise');

const getRecentlyPlayed = async (auth) => {
    const options = {
        method: 'GET',
        uri: 'https://api.spotify.com/v1/me/player/recently-played?limit=50',
        headers: {
            "Authorization": `Bearer ${auth}`,
        },
        json: true
    }

    const response = await rp(options);
    return response.items;
}

module.exports = {
    getRecentlyPlayed
}