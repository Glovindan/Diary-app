const express = require('express');
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json({extended: true}))
app.use('/events',require('./routes/events.routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})