const pg = require("pg");
const moment = require('moment');
const name = process.argv.slice(2)[0];
const settings = require("./secret/settings"); // settings.json
const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

console.log(name);
client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }
    client.query(`SELECT * FROM famous_people WHERE first_name = $1::TEXT OR last_name = $1::TEXT`, ['' + name], (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        for (let i of result.rows) {
            console.log(' -', i.id, ":", i.first_name, i.last_name, "born " + moment(i.birthdate * 1000).format('YYYY MM DD'));
        }
        client.end();
    });
});