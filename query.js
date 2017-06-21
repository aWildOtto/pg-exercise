const db = require('./db');
module.exports = {
    lookupPerson: (name) => {
        db.connect((err, client) => {
            client.query(`SELECT * FROM famous_people WHERE first_name = $1::TEXT OR last_name = $1::TEXT`, ['' + name], (err, result) => {
                if (err) {
                    return console.error("error running query", err);
                }
                console.log('pg query result:');
                for (let i of result.rows) {
                    console.log(' -', i.id, ":", i.first_name, i.last_name,
                        `born  '${i.birthdate.getFullYear()}-${i.birthdate.getMonth()+1}-${i.birthdate.getDate()}'`);
                }
                db.close(client);
            });
        });
    }
}