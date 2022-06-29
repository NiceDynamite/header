const express = require('express');
const cors = require('cors')
const pool = require('./database/connection.js')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5001

app.get('/api/item/:name', async (req, res) => {
    try {
        const data = await pool.query('SELECT id FROM target_item WHERE LOWER(item) = LOWER($1);', [req.params.name])
        res.json(data.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})