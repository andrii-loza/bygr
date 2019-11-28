const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fs = require("fs");
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(cors());

let data;

async function getData() {
  const content = await fs.readFileSync(__dirname + "/data.json");
  return JSON.parse(content);
}

app.get('/buyer-info/:floor', async (req, res) => {
  data = await getData();
  if (!req.params.floor) res.send(data);
  else res.send(data.filter(item => item.floor == req.params.floor));
});

app.get('/data', async (req, res) => {
  data = await getData();
  res.send(data);
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server start on port ${port}!`);
});