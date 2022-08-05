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

module.exports = { chkfunc }