const { getDate } = require('./Date');
function log(text) { 
    let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
    console.log(welcome + text);
}
module.exports = { log }