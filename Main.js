const { chkfunc } = require('./Space');
const { chkDate } = require('./Date');
const { log } = require('./Utils');
const { flag, connect } = require('./WebSocket');
log("Rozpoczynam działanie programu.");
async function Main() {
    if(!chkDate()) { chkfunc(); }
    await new Promise(res=>setTimeout(res,2000));
    process.nextTick(Main);
}
async function Web() {
    if(!flag) connect();
    // await new Promise(ress=>setTimeout(ress,720000));
    await new Promise(ress=>setTimeout(ress,5000));
    process.nextTick(Web);
}
Web();
Main();