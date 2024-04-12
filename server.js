
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user');


// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// parse json data
app.use(express.json());


// routes

app.use('/api', userRoutes);



// connect to mongodb


mongoose.connect(process.env.dbURI)
    .then((result) => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to mongo & Server started on port ${process.env.PORT}`)
        });

    })
    .catch((err) => console.log(err));



