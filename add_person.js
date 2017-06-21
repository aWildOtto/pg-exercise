const person = process.argv.slice(2);
const knexquery = require('./knex/query');

knexquery.insertPerson(person[0], person[1], person[2]);