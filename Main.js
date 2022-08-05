const { chkfunc } = require('./Space');
const { getDate, chkDate } = require('./Date');
let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
function log(text) { console.log(welcome + text); }

log("Rozpoczynam działanie programu.");
setTimeout(Main,1000);
async function Main() {
    if(chkDate) { chkfunc(); }
    await new Promise(res=>setTimeout(res,2000));
    process.nextTick(Main);
}