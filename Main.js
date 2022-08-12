const { chkfunc } = require('./Space');
const { chkDate } = require('./Date');
const { Setup, log } = require('./Utils');
const { flag, connect } = require('./WebSocket');
async function Main() {
    if(!chkDate()) { chkfunc(); }
    await new Promise(res=>setTimeout(res,60000));
    process.nextTick(Main);
}
async function Web() {
    log("Odświeżanie Połączenia");
    if(!flag) connect();
    await new Promise(ress=>setTimeout(ress,3600000));
    process.nextTick(Web);
}
Setup();
Web();
Main();