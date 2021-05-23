const Occurrence = require('./../models/occurrence')

module.exports = app => {
    app.get('/occurrence', async (req, res) => {
        Occurrence.list(res)
    })

    app.post('/occurrence', (req, res) => {
        Occurrence.insert(req.body, res)
    })
    
    app.get('/occurrence/:id', (req, res) => {
    	const { id } = req.params
	    Occurrence.findById(id, res)
    })

}
