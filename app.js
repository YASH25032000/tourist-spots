const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const databaseURL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/yelp-camp';

mongoose.connect(databaseUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(`Database connection error: ${err.message}​​`));



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})


app.listen(3000, () => {
    console.log("serving on port");
})