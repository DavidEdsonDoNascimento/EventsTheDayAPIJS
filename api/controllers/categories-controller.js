import * as db from '../models';

class CategoriesController 
{
    static async list(req, res)
    {
        try{
            
            const categories = await db.Categories.findAll({ where: { status: true } })
            return res.status(200).json(categories)
        }
        catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async findById(req, res)
    {
        const { id } = req.params
        
        try{

            const category = await db.Categories.findOne({ where: { id: id } })
            return res.status(200).json(category)
        }
        catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async insert(req, res)
    {
        
        try{

            const category =  await db.Categories.create({ ...req.body, status: true })
            return res.status(201).json(category)
        }
        catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async update(req, res)
    {
        const { id } = req.params
        const data = req.body

        try{

            await db.Categories.update(data, { where: { id: id } })

            const category = await db.Categories.findOne({where: { id: id } })
            return res.status(200).json(category)
        }
        catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async delete(req, res) 
    {
        const { id } = req.params
        
        try{

            await db.Categories.update({ status : false }, { where: { id: id } })
            return res.status(200).json({ message: `Registro de id ${id} deletado com sucesso.`})
        }
        catch(e){
            return res.status(500).json(e.message)
        }
    }
}

module.exports = CategoriesController