const chkdsk = require('check-disk-space').default;
const { path , connection } = require('./config.json');
const data = {};
Checking();
function chkfunc(){
    chkdsk(path).then((diskSpace) => {
        let left = freeSpace(diskSpace.free, diskSpace.size).toFixed(2);
        data.name = connection.hostname;
        data.left = left;
    });
}
async function Checking() {
    chkfunc();
    await new Promise(ress=>setTimeout(ress,300000));
    process.nextTick(Checking);
}
function freeSpace(free, size){ return (free / size) * 100; }
module.exports = { data }