module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": 8889,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.JAWSDB_USER,
    "password": process.env.JAWSDB_PASS,
    "database": process.env.JAWSDB_NAME,
    "host": process.env.JAWSDB_HOST,
    "port": 3306,
    "dialect": "mysql"
  }
}
