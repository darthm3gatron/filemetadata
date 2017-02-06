var express = require('express');
var morgan = require('morgan');
var path = require('path');
var PORT = process.env.PORT || 3000;
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+'/index.html'));    
});

app.post('/upload', upload.single('file'), function(request, response){
   response.json(request.file); 
});

app.listen(PORT, function(){
   console.log('Listenon on port ' + PORT); 
});