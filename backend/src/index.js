
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://desenvolvimento:desenvolvimento@cluster0-pxffk.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); 
app.use(routes);
app.listen(3333);