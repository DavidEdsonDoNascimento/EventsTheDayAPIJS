const Occurrence = require('./../models/occurrence')

module.exports = app => {
    app.get('/occurrence', async (req, res) => {
        
        try{

            const result = await Occurrence.list()
            return res.status(result.status).json(result)
        } 
        catch(error){
            return res.status(500).json({ error: error })
        }
    })

    app.post('/occurrence', (req, res) => {
        Occurrence.insert(req.body, res)
    })
    
    app.get('/occurrence/:id', (req, res) => {
    	const { id } = req.params
	    Occurrence.findById(id, res)
    })

}
