// db.js
import pg from 'pg'
const { Pool } = pg

// Database connection parameters
const db = new Pool({
  ssl: {
    rejectUnauthorized: false
  },
  connectionString:
    'postgres://joncen:7wOZQb6uiBNNTZlQfo8WD6AxE98OVntH@dpg-cmsa5i6d3nmc73eqd01g-a.singapore-postgres.render.com/dbprojects_9809'
})

export default db
