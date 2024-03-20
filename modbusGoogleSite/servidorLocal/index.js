const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
app.use(cors());

const fetch =  require("node-fetch")

var jsModbus =require('./jsModbus/src/jsModbus.js'),
    util = require('util');

var client = jsModbus.createTCPClient(502, '192.168.10.41');

var bit = 0;

function comunica(){
    fetch('https://d787c086-cd17-47da-b464-e6c88790489d-00-pxl0z27931jl.spock.replit.dev:3000/',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(function(response){
        if(response.status != 200)
            console.log("Erro na requisição")
        if(response.status == 200)
            return response.json();
    })
    .then(function(data){
        try{
            bit = data.l1
        }
        catch{
            console.log("Erro na comunicação")
        }
        
    })

    client.writeSingleCoil(0, bit);
}

setInterval(comunica, 100);