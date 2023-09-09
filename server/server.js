const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();

app.post('login', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        const code = req.body.code;
        redirectUri: 'http://localhost:3000',
        clientId: '94014960099948058879c9de44ff078b',
        clientSecret: '6ad257e5205646f5a5152438827a39f4'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})