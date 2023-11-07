

// imports 
const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('./config/db.js');
const path = require('path');
const Coin = require('./models/Coins.js');
const Crypto = require('./models/Currencies.js');


const PORT = 3000;


const app = express();
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());

// will happen on every request (taking away the /server part)
// app.use((req, res, next)=> {
//     if (req.path.startsWith('/server')) {
//         req.url = req.url.replace('/server', ''); // strip /server from the path
//     }
//     next();
// });



// frontend 
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/coins", async (req, res) => {
    try {
        let dbResponse = await Coin.find();
        res.send(dbResponse)
    } catch(error) {
        res.status(400).send("error")
    }
});


// CREATE 
app.post("/currencies", async (req, res) => {
    try {
        let createdResponse = await Crypto.create(req.body);
        res.status(201).send(createdResponse)
    } catch(error) {
        res.status(400).send("error")
    }
});
// READ 
app.get("/currencies", async (req, res) => {
    try {
        let readResponse = await Crypto.find()
        res.status(200).send(readResponse)
    } catch(error) {
        res.status(400).send("error")
    }
});
// UPDATE
app.put("/currencies/:id", async (req, res) => {
    try {
        let updatedResponse = await Crypto.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("stateId")
        console.log(updatedResponse, req.body);

        res.status(200).send(updatedResponse);
    } catch(error) {
        res.status(400).send("error")
    }
});

// DELETE
app.delete("/currencies/:id", async (req, res) => {
    try {
        let deletedResponse = await Crypto.findByIdAndDelete(req.params.bootcampId);
        res.status(200).send(deletedResponse);
    } catch(error) {
        res.status(400).send("error")
    }
});




app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE:    http://localhost:${PORT}/`);
});


