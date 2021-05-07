const connect = require('../infra/connection')

class Occurrence 
{
    list(res) 
    {
        connect.query('SELECT e.*, c.name as category_name FROM occurrence e INNER JOIN category c on c.id = e.category_id WHERE e.status = 1', (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, occurrence: result })
        })
    }

    insert(occurrence, res)
    {

        connect.query('INSERT INTO occurrence SET ?', occurrence, (error, result) => {
            return error? res.status(400).json(error) : res.status(201).json({ success: true, message: `Ocorrencia ${occurrence.summary} criada com sucesso.` })
        })
    }
}

module.exports = new Occurrence