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
app.get('/login/:email-:password', (req, res) => {
    try {
        const { email, password } = req.params;
        registered_users.filter(user => {
            if (email === user.email && password === user.password)
            {
                res.status(200).json({
                    email: user.email,
                    password: user.password
                })
            }
        })
    } catch (error) {
        res.status(404).send("Invaid Username or password, try again!");
    }    
}
);

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