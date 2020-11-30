const express = require('express');
const weatherRouter = express.Router();
const weatherHelper = require('../services/weatherHelper');

weatherRouter.get('/:zip', weatherHelper.getWeather, (req, res) => {
    res.json(res.locals.weather)
})


module.exports = weatherRouter;