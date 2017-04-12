var express = require("express");
var app = express();


app.use('/', express.static(__dirname + '/public'));
app.use('/build', express.static(__dirname + '/build'));

app.get('*', function (request, response){
    console.log('Sending index.html!')
    response.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(3000);