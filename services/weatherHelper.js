require('dotenv').config();
const fetch = require('node-fetch');
const zipKey = process.env.GEOCODE_KEY;
const weatherKey = process.env.WEATHER_KEY;

// fetch lat long by zip from Google, fetch weather

const getWeather = (req, res, next) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.id}&key=${zipKey}`)
    .then(res => res.json())
    .then(data => {
        const lat = data.results[0].geometry.location.lat;
        const long = data.results[0].geometry.location.lng;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${weatherKey}`)
        .then(res => res.json())
        .then(data => {
            res.locals.weather = data;
            next();
        })
    })
    .catch(err => {
        console.log(err);
    })
}


module.exports = {getWeather};