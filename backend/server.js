
require("dotenv").config();
const express = require('express')
const cors = require("cors");
const contactRouter = require('./routers/contactRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRouter)

app.listen(5000, ()=>{
    console.log("server running on the port 5000");
})