const chkdsk = require('check-disk-space').default;
const { path , connection } = require('./config.json');
const { send } = require('./WebSocket');
const { log } = require('./Utils');

function chkfunc(){
    chkdsk(path).then((diskSpace) => {
        log("Pozostało miejsca na " + diskSpace.diskPath + " - " + freeSpace(diskSpace.free, diskSpace.size).toFixed(2) + " %");
        send("Na: " + connection.hostname + " Pozostało: " + freeSpace(diskSpace.free, diskSpace.size).toFixed(2) + " %");
        // socket.send(diskSpace.diskPath);
        // socket.send(diskSpace.free);
        // socket.send(diskSpace.size);
        // let busy = diskSpace.size - diskSpace.free;
        
        // INFO:
        // {
        //     diskPath: '/',
        //     free: 123,
        //     size: 321
        // }
        // saved in bytes
        return true;
    });
}

function freeSpace(free, size){
    return (free / size) * 100;
}

// function ByteConv(number){
//     var marker = 1024;
//     var kiloBytes = marker; // One Kilobyte is 1024 bytes
//     var megaBytes = marker * marker; // One MB is 1024 KB
//     var gigaBytes = marker * marker * marker; // One GB is 1024 MB
//     var gigaBytes = marker * marker * marker; // One GB is 1024 MB
//     var teraBytes = marker * marker * marker * marker; // One TB is 1024 GB
//     return result;
// }

module.exports = { chkfunc }