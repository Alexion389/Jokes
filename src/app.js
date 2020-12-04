const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { getJoke } = require('./request/requestHandler')

const app = express();

// Set path
const viewsPath = path.join(__dirname, '../template/views')
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup view engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
// Set html assets path
hbs.registerPartials(partialsPath)
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {

    getJoke()
        .then(data => {
            console.log(data);
            res.render('index', {
                setup: data.setup,
                punchline: data.punchline
            })
        });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on port 3000')
})