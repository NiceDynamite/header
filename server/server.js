const express = require('express');
const cors = require('cors')
const pool = require('./database/connection')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3001

app.get('/api/item/:name', async (req, res) => {
    try {
        const data = await pool.query('SELECT id FROM target_item WHERE LOWER(item) = LOWER($1);', [req.params.name])
        res.json(data.rows)
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})