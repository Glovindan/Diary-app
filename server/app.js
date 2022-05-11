const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use('/events',require('./routes/events.routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})