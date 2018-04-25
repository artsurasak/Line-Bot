var express = require('express');
var middleware = require('@line/bot-sdk').middleware
var JSONParseError = require('@line/bot-sdk').JSONParseError
var SignatureValidationFailed = require('@line/bot-sdk').SignatureValidationFailed
var bodyParser = require('body-parser')
var app = express()
var http = require('http')
var server = http.createServer(app)

const config = {
  channelAccessToken: 'wNGFPyRYMYL1ZuaxZBZN+gw/1FOMR52WrEGtybbWfLlXsyIJU+2NUrUB70DQzT1ID4Jhwh34P4mc3fFdIEI7rtjUToiUzOlxjmtEfS/mekbd01VYgAYZybnHi9y0Q3REK0oaVFJricEwTEehEYaOGgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '553bc1a177fb9b042fa30b3544357169'
}

app.use(middleware(config))

app.post('/webhook', (req, res) => {
  res.json(req.body.events) // req.body will be webhook event object
})

app.use((err, req, res, next) => {
  if (err instanceof SignatureValidationFailed) {
    res.status(401).send(err.signature)
    return
  } else if (err instanceof JSONParseError) {
    res.status(400).send(err.raw)
    return
  }
  next(err) // will throw default 500
})
// app.get('/', function (req, res) {
//   res.send('Hello')
// });

/*
app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})*/

server.listen(4000,function(){
console.log("server listen at localhost:4000");});