const name = process.argv.slice(2)[0];
const query = require('./query');

query.lookupPerson(name);