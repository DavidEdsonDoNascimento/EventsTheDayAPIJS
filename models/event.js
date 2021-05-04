const connect = require('./../infra/connection')

class Event 
{
    list(res) 
    {
        connect.query('SELECT * FROM event WHERE status = 1', (error, result) => {
            return error? res.status(400).json(error) : res.status(200).json({ success: true, event: result })
        })
    }

    insert(event, res)
    {

        connect.query('INSERT INTO event SET ?', event, (error, result) => {
            return error? res.status(400).json(error) : res.status(201).json({ success: true, message: `Evento ${event.summary} criado com sucesso.` })
        })
    }
}

module.exports = new Event