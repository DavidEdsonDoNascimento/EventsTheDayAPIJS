const connect = require('./../infra/connection')

class Category 
{
    list(res)
    {
        connect.query(`SELECT * FROM category WHERE status = 1`, (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, categories: result })
        })
    }
    
    insert(category, res)
    {
        connect.query(`INSERT INTO category SET ?`, category, (error, result) => {
            return error? res.status(400).json(error) : res.status(201).json({ success: true, message: `Categoria ${category.name} criada com sucesso.` })
        })
    }

    delete(id, res){
        connect.query(`DELETE FROM category WHERE id = ?`, id, (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, message: `Categoria deletada com sucesso.` })
        })
    }

    search(name, res){
        
        const formattedNameForSearch = `%${name}%`

        connect.query(`SELECT * FROM category WHERE name LIKE ?`, formattedNameForSearch, (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, categories: result })
        })
    }
}

module.exports = new Category