// programa rodando online em servidor de teste no replit.com
// https://replit.com/@RENATOBRUNO/servidorModbus#index.js
// 09106128@senaimgdocente.com.br

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var cors = require("cors");
var bit = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  bit = req.body.l1;
  console.log(bit);
  res.end();
});

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      l1: bit,
    }),
  );
  res.end();
});

app.listen(3000);
