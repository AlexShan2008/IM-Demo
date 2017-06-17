/**
 * Created by ShanGuo on 2017/6/17.
 */
/**
 * express 和socket.io配合使用；
 *
 */

const express = require('express');
const app = express();

//访问项目根目录时，显示index页面；
app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});

let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.send('welcome');
    //给客户端回复消息；
    socket.on('message', function (msg) {
        console.log(msg);
        socket.send('服务器：' + msg);
    })
});


server.listen(8080);