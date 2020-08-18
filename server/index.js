const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000;

app.use(express.static('client/dist'));

app.all("/stays/*", (req, res) => {
  axios({
    method: req.method,
    url: "http://localhost:3001"+req.originalUrl,
    headers: req.headers,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
});
