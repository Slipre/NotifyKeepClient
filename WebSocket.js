const WebSocket = require('ws');
const { log } = require('./Utils');
const { connection } = require('./config.json');
var socket;
let flag = false;
function send(text){
    if(!flag) return log("Nie można wysłać - Rozłączono.");
    socket.send(text);
}
function connect () {
    if(socket === undefined) {
        socket = new WebSocket('ws://' + connection.server_ip + ':'+ connection.port);
        socket.on('open', function open() {
            log("Połączono z: " + connection.server_ip);
            socket.send(connection.hostname + " Połączony!");
            flag = true;
        });
        socket.on('error', (error) => {
            log("Błąd połączenia!");
            flag = false;
            socket = undefined;
        });
        socket.on('close', () => {
            log("Rozłączono.");
            flag = false;
            socket = undefined;
        });
    }
}
module.exports = { flag, connect, send };