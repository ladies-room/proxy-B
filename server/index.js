const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000;

app.use(express.static('client/dist'));


//More places to stay
app.all("/stays/*", (req, res) => {
  axios({
    method: req.method,
    url: "http://18.204.156.27:3001"+req.originalUrl,
    headers: req.headers,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch();
});

//Gallery
app.get('/property/:id', (req, res) => {
  axios.get('http://54.215.39.92:3003' + req.url)
    .then(response => {
      res.send(response.data);
    })
    .catch(console.log)
});

//Calendar
app.get("/listing", (req, res) => {
  axios.get(`http://localhost:2046/listing/`)
    .then(response => {
      res.send(response.data);
    })
});

app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
});
