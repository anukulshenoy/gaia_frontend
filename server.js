var express = require("express");
const Promise = require("bluebird");
const request = Promise.promisify(require('request'));
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require("path");
server.listen(3000, function(){
    console.log("Listening on port 3000");
});

app.use('/', express.static(__dirname + '/public'));
app.use('/build', express.static(__dirname + '/build'));

app.get('*', function (request, response){
    console.log('Sending index.html!')
    response.sendFile(path.resolve(__dirname, './public/index.html'));
});

io.on('connection', function (socket) {

    socket.on("getVideoList", function() {
        console.log("asking for videos");
        const options = {
            url: 'https://d6api.gaia.com/videos/term/119931',
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        request(options).then(function(data){
            let titles = JSON.parse(data.body).titles;
            socket.emit("videoTitles", titles);
        });
    });

});

