var express = require("express");
const Promise = require("bluebird");
const request = Promise.promisify(require('request'));
var app = express();


app.use('/', express.static(__dirname + '/public'));
app.use('/build', express.static(__dirname + '/build'));

app.get('*', function (request, response){
    console.log('Sending index.html!')
    response.sendFile(path.resolve(__dirname, './public/index.html'));
});

const options = {
    url: 'https://d6api.gaia.com/videos/term/119931',
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

request(options).then(function(data){
    console.log(JSON.parse(data.body).titles);
});

app.listen(3000);