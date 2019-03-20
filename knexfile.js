// Update with your config settings.

module.exports = {

    test:{
        client: 'mssql',
        connection: {
            host: 'localhost',
            user: 'sa',
            password: 'yourStrong(!)Password',
            database: 'cohort_3_test'
        },
        pool: {
            min: 2,
            max: 20
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

  development: {
    client: 'mssql',
        connection: {
            host: 'localhost',
            user: 'sa',
            password: 'yourStrong(!)Password',
            database: 'cohort_3'
        },
        pool: {
            min: 2,
            max: 20
        },
        migrations: {
            tableName: 'knex_migrations'
        }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
