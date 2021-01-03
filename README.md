# spotify-recently-played-extractor
Service that downloads the recently played musics from Spotify and stores them into AWS S3.

This service was originally developed for a personal project designed to create a dashboard of listening patterns for myself. You can see the end result by going to https://spotifyreport.web.app/

As this project was not originally designed to be ported to other users, there is currently no setup tutorial on here. That said, it shouldn't take much work, so I might include a step-by-step here on the future.

## What does it do?
This service fetches the last 50 played tracks on spotify for a specific user and stores the result into a bucket on AWS S3.  

## How it works?
This service is deployed on AWS Lambda, and it is scheduled to run every hour. As Spotify limits the amount of tracks you can fetch from it's API to 50, running it every hour will guarantee that no data will be lost.

The data stored on S3 is then loaded into a PostgreSQL database by [spotify-database-loader](https://github.com/GersonLCSJunior/spotify-database-loader). The database is then connected to Data Studio, which is where the dashboard was created.

## Related repositories
[spotify-database-loader](https://github.com/GersonLCSJunior/spotify-database-loader)
