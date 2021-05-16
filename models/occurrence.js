const connect = require('../infra/connection')
const moment = require('moment')

class Occurrence 
{
    list(res) 
    {
        connect.query('SELECT e.*, c.name as category_name FROM occurrence e INNER JOIN category c on c.id = e.category_id WHERE e.status = 1 ORDER BY create_in', (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, occurrence: result })
        })
    }

    insert(occurrence, res)
    {
        const newOccurrence = { ...occurrence, create_in: moment().format('YYYY-MM-DD HH:mm:ss')}

        connect.query('INSERT INTO occurrence SET ?', newOccurrence, (error, result) => {
            return error? res.status(400).json(error) : res.status(201).json({ success: true, message: `Ocorrencia ${occurrence.summary} criada com sucesso.` })
        })
    }
    
    findById(id, res){
    	connect.query('SELECT * FROM occurrence WHERE id = ?', id, (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, result: result })
        })
    }
}

module.exports = new Occurrence
