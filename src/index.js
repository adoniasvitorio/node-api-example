const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Hello world, I am NodeJS API example.'})
});

app.listen(3333, () => {
    console.log('Back-end is running!')
});