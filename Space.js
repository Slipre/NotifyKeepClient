const { path } = require('./config.json');
const chkdsk = require('check-disk-space').default;

function chkfunc(){
    chkdsk(path).then((diskSpace) => {
        // const diskPath = diskSpace.diskPath;
        // const diskFree = diskSpace.free;
        // const diskSize = diskSpace.size;
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