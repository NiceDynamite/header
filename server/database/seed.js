const { faker } = require('@faker-js/faker')
const pool = require('./connection')


let items = [];

for (let i = 0; i < 10; i++) {
    let item = faker.commerce.product()
    let obj = {
        item
    }
    items.push(obj)
}

const insertData = (items) => {
    items.forEach((item) => {
        const query = `INSERT INTO target_item (item) VALUES ('${Object.values(item)}');`
        pool.query(query)
    })
    pool.end()

}

insertData(items)