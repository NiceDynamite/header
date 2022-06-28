const { Pool } = require('pg')

const pool = new Pool({
    connectionString: 'postgresql://aaron:@localhost:5432/target_db'
})

module.exports = pool