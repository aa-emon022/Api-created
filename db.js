const { createPool } = require('mysql')
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pet_hotel",
    connectionLimit: 10
})

module.exports = pool;