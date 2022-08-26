const WebSocket = require('ws');
const { log } = require('./Utils');
const { data } = require('./Space');
const { connection } = require('./config.json');
let socket = undefined;
flag = Boolean();
function send(msg){
    if(!flag) return log("Nie można wysłać - Rozłączono.");
    socket.send(msg);
}
function Connect () {
    socket = new WebSocket('ws://' + connection.server_ip + ':'+ connection.port);
    socket.on('open', function open() {
        log("Połączono z: " + connection.server_ip);
        socket.send(connection.hostname + " Połączony!");
        flag = true;
    });
    socket.on('error', () => {
        log("Błąd połączenia!");
        flag = false;
    });
    socket.on('close', (e) => {
        log("Rozłączono.",e.reason);
        log("Ponowne łączenie za 30 sekund...");
        flag = false;
        setTimeout(() => { Connect(); },30000);
    });
    socket.on('message', (msg) => {
        if(msg == "dataplease") {
            log("Pozostało miejsca na " + data.name + " - " + data.left + " %");
            send(JSON.stringify(data));
        }
        else {
            log("Szumy na łączach");
            console.log('%s', msg);
        }
    });
}
module.exports = { flag, Connect, send };