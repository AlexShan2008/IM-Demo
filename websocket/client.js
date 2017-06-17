/**
 * Created by ShanGuo on 2017/6/17.
 */
let Socket = require('ws');
//用客户端连接服务器；
let socket = new Socket('ws://localhost:8080');

socket.on('open',function () {
    console.log('握手成功');
});
socket.on('message',function (msg) {
    console.log(msg);
});