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
            
            const occurrence = await db.Occurrences.findOne({ 
                include: db.Times,
                where: { id: id } 
            })

            return res.status(200).json(occurrence)
        }
        catch (err){
            return res.status(500).json(err.message)
        }
    }

    static async findTimesOfOccurrence(req, res)
    {
        const { id } = req.params

        try {

            const times = await db.Times.findAll({ where: { occurrence_id: id }, order: [ ['start'] ] })
            return res.status(200).json(times)
        }
        catch (err){
            return res.status(500).json(err.message)
        }
    }

    static async deleteTimeOfOccurence(req, res)
    {
        const { occurrenceId, timeId } = req.params

        try{

            await db.Times.destroy({ where: { id: timeId, occurrence_id: occurrenceId }})
            return res.status(200).json({ message: `Tempo excluido.` })
        }
        catch (err){
            return res.status(500).json(err)
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
        const { summary, obs, Times } = req.body

        try{
            
            await db.Occurrences.update({ summary: summary, obs: obs}, { where: { id: id }})

            if(Times.length > 0){

                Times.forEach(async time => {

                    let timeObj = {
                        start: time.start, 
                        end: time.end, 
                        status: time.status,
                        occurrence_id: id
                    }

                    if(typeof time.id == 'undefined'){
                        await db.Times.create(timeObj)    
                        return;
                    }

                    await db.Times.update(timeObj, { where: { id: time.id, occurrence_id: id } }) })
            }
            
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