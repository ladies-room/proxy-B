const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//More places to stay
app.get('/stays/*', (req, res) => {
  axios.get("http://18.204.156.27:3001"+req.originalUrl)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/stays/*', (req, res) => {
  axios.post("http://18.204.156.27:3001"+req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/stays/*', (req, res) => {
  axios.put("http://18.204.156.27:3001"+req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
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
  axios.get(`http://3.17.161.89:2046/listing/`)
    .then(response => {
      res.send(response.data);
    })
});

app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
});
