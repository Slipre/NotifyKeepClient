const { getDate } = require('./Date');
function log(text) { 
    let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
    console.log(welcome + text);
}
function Setup(){
    console.log("======START======");
    console.log("==[NOTIFYKEEPC]==");
    console.log("=================");
    log("Praca w tle rozpoczęta...");
    log("Życzę miłego dnia i smacznej Kawusi :)");
}  
module.exports = { log, Setup }