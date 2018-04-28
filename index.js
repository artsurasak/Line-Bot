const line = require('@line/bot-sdk')
const express = require('express');
const app = express();
const config = require('./config.js');
//app.post('/webhook', line.middleware(config), handler.webhook);
//console.log(config);
app.use(line.middleware(config));
//console.log(line.middleware(config));
app.post('/https://api.line.me/v2/bot/message/reply', (req, res) => {
   console.log("User id: " + req.body.events[0].source.userId)
  res.json(req.body.events) // req.body will be webhook event object
})

console.log(app.post('/webhook','','')
});


// app.post('/webhook', line.middleware(config), (req, res) => {
//     console.log("User id: " + req.body.events[0].source.userId)
// });

// File: handler/index.js
// Response {status: ok} to LINE call right away, but process the actual event in the background

// app.listen(port);
// console.log('Server started! At http://localhost:' + port);