const db = require('./../models')

class OccurrencesController 
{
    static async list(req, res)
    {
        try {

            const occurrences = await db.Occurrences.findAll()
            return res.status(200).json(occurrences)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async findById(req, res)
    {
        const { id } = req.params
        
        try{
            
            const occurrence = await db.Occurrences.findOne({ where: { id: id } })
            return res.status(200).json(occurrence)
        }
        catch (err){
            return res.status(500).json(err.message)
        }
    }
    
    static async insert(req, res)
    {
        try{

            const occurrence = await db.Occurrences.create(req.body)
            return res.status(200).json(occurrence)
        }
        catch (err){
            return res.status(500).json(err.message)
        }
    }

    static async update(req, res)
    {
        const { id } = req.params

        try{
            
            await db.Occurrences.update(req.body, { where: { id: id }})
            
            const occurrence = await db.Occurrences.findOne({ where: { id: id } })
            
            return res.status(200).json(occurrence)
        }
        catch (err){
            return res.status(500).json(err.message)
        }
    }

    // static async delete(req, res)
    // {
    //     try{

    //     }
    //     catch (err){
    //         return res.status(500).json(err.message)
    //     }
    // }
}

module.exports = OccurrencesController