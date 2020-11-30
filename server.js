//dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//routers here
const weatherRouter = require('./routes/weatherRouter');

//app initialize
const app = express();

//.env
require('dotenv').config();

//middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

//home
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

//use routers here
app.use('/api/v1/weather', weatherRouter);

//Send to React App
// app.use('*', (req, res) => {
//     console.log(`------------reached this point----------------`)
//     process.env.NODE_ENV === 'production'
//       ? res.sendFile(path.join(__dirname, 'public/index.html'))
//       : res.status(404).json({ message: 'not found' });
//   });

//error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({
        err,
        message: err.message,
        stack: err.stack,
    })
})