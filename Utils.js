const { getDate } = require('./Date');
function log(text) { 
    let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
    console.log(welcome + text);
}
function Setup(){
    console.log('\x1b[36m%s', "======START======");
    console.log("==[NOTIFYKEEPC]==");
    console.log("=================", '\x1b[0m');
    log("Praca w tle rozpoczęta...");
    log("Życzę miłego dnia i smacznej Kawusi :)");
}  
module.exports = { log, Setup }