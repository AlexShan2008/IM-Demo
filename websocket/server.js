/**
 * Created by ShanGuo on 2017/6/17.
 */
let Server = require('ws').Server;
let server = new Server({port: 8080});

server.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log(msg);
        socket.send('服务器：' + msg);
    })
});