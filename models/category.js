const connect = require('./../infra/connection')

class Category 
{
    list(res)
    {
        connect.query(`SELECT * FROM category WHERE status = 1`, (error, result) => {
            return error? res.json(error) : res.json({ categories: result })
        })
    }
    
    insert(category, res)
    {
        connect.query(`INSERT INTO category SET ?`, category, (error, result) => {
            return error? res.json(error) : res.json(result)
        })
    }
}

module.exports = new Category