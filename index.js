const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    console.log(req.method, req.path);
    const date = req.query.date || '';
    let imageData = null;

    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: process.env.NASA_API_KEY,
                date: date
            }
        });

        imageData = response.data;

        const remainingRequests = response.headers['x-ratelimit-remaining'];
        const rateLimit = response.headers['x-ratelimit-limit'];
        console.log(`Remaining Requests: ${remainingRequests}/${rateLimit}`);

    } catch (error) {
        console.error('Error', error);
    }

    res.render('index', { imageData });
});

app.listen(port, () => {
    console.log(`start listening`);
});
