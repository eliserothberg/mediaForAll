const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/MediaForAll'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/MediaForAll/index.html'));

});

console.log("Server running on 8080");

app.listen(process.env.PORT || 8080);
