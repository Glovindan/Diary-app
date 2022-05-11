const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({text:'Hello World!'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/events',require('./routes/events.routes'))