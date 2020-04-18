const APPLICATION_KEY = process.env.APPLICATION_KEY;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const { getToken } = require('./src/authController');
const { getRecentlyPlayed } = require('./src/extractController');

exports.handler = async () => {
    const access_token = await getToken({APPLICATION_KEY, REFRESH_TOKEN});
    const music_list = await getRecentlyPlayed(access_token);

    const date = new Date().toISOString().replace(/T.*/, '');
    const timestamp = new Date().getTime();
    await S3.putObject({
        Bucket: 'spotify-recently-played-raw-files',
        Key: `raw_files/${date}/${timestamp}.json`,
        Body: JSON.stringify(music_list)
    }).promise()
};
