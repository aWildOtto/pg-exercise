// Update with your config settings.
const settings = require("./secret/settings");
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      user: settings.user,
      password: settings.password,
      database: settings.database,
      host: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};