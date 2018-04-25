var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http');
var server = http.createServer(app);
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Hello')
})

/*
app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})*/

server.listen(4000,function(){
console.log("server listen at localhost:4000");});