const rp = require('request-promise');

const getToken = async (params) => {
    const options = {
        method: 'POST',
        uri: 'https://accounts.spotify.com/api/token',
        headers: {
            "Authorization": params.APPLICATION_KEY,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        form: {
            "grant_type": "refresh_token",
            "refresh_token": params.REFRESH_TOKEN
        },
        json: true
    }
    try {
        const response = await rp(options);
        return response.access_token;
    } catch(e) {
        return e;
    }
    
}

module.exports = {
    getToken
}