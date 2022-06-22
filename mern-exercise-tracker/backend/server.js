const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//Create express server
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Establish MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB database connection established successfully'));

app.listen(port, () => console.log(`Server is running on port: ${port}`));