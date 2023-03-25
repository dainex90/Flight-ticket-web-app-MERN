const express = require("express");
const app = express();
const PORT = 8000;
const path = require('path');
const cors = require("cors");
const flight_route_data = require('../data/flight_route_data.json');

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

app.post('/flights', (req, res) => {
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