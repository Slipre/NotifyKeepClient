const chkdsk = require('check-disk-space').default;
const { path , connection } = require('./config.json');
const { send } = require('./WebSocket');
const { log } = require('./Utils');
function chkfunc(){
    chkdsk(path).then((diskSpace) => {
        log("Pozostało miejsca na " + diskSpace.diskPath + " - " + freeSpace(diskSpace.free, diskSpace.size).toFixed(2) + " %");
        send("Na: " + connection.hostname + " Pozostało: " + freeSpace(diskSpace.free, diskSpace.size).toFixed(2) + " %");
        return true;
    });
}
function freeSpace(free, size){
    return (free / size) * 100;
}
module.exports = { chkfunc }