const name = process.argv.slice(2)[0];
const query = require('./query');

const knexquery = require('./knex/query');

function printPerson(error, result) {
  if (error) {
    return console.error('error running query', error);
  }
  console.log('pg query result:');
  for (let i of result.rows) {
    console.log(' -', i.id, ":", i.first_name, i.last_name,
      `born  '${i.birthdate.getFullYear()}-${i.birthdate.getMonth()+1}-${i.birthdate.getDate()}'`);
  }
}

query.lookupPerson(name);


knexquery.lookupPerson(name);