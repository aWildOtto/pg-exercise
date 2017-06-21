const knex = require('./db');
module.exports = {
  lookupPerson: (name, cb) => {
    knex.select().from('famous_people').where({ first_name: name }).orWhere({ last_name: name }).asCallback((error, result) => {
      if (error) {
        return console.error('error running query', error);
      }
      console.log('knex query result:');
      for (let i of result) {
        console.log(' -', i.id, ":", i.first_name, i.last_name,
          `born  '${i.birthdate.getFullYear()}-${i.birthdate.getMonth()+1}-${i.birthdate.getDate()}'`);
      }
    });
    knex.destroy();
  },

  insertPerson: (fn, ln, bd) => {
    knex('famous_people').insert({ first_name: fn, last_name: ln, birthdate: bd }).asCallback((err, result) => {
      console.log(err);

    });
    knex.destroy();
  }

}