const express = require("express");
const app = express();
const PORT = 8000;
const path = require('path');
const cors = require("cors");
const flight_route_data = require('../data/flight_route_data.json');
const registered_users = require('../data/registered_users.json');

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../static_content')));

// parsing JSON Data
app.use(express.json());

// GET request on root route
app.get('/', (req, res) => {
    res.send("Hello, Server running on port 8000");
})

app.get('/flights', (req, res) => {
    res.status(200).send(flight_route_data);
});

// Login Request
app.post('/login/:email-:password', (req, res) => {
    registered_users.filter(user => {
        if (req.params.email == user.email && req.params.password == user.password)
        {
            res.status(200).send("User was logged in!");
        }
    })
    res.status(400).send("Could not login, Try again");
})

// buy Ticket Request
app.get('/flights/:buy', (req, res) => {
    res.status(200).send("Ticket Bought! Happy traveling");
})


app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running,
                    and App is listening on port " + ${PORT}`);
    }
    else {
        console.log("Error occured, server can't start", error);
    }
})