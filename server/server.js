require('dotenv').config();
const express = require('express')
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')

//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on localhost:${port}`));

mongoose.connect(process.env.connection_url).then(console.log("DB Connected"));

 