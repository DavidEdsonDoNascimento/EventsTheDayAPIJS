
const db = require('./../models')

class UsersController
{
    static async list(req, res)
    {
        try{
            const users = await db.Users.findAll()
            return res.status(200).json(users)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }
    
    static async insert(req, res)
    {
        try{
            const user = await db.Users.create(req.body);
            return res.status(201).json(user)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }
}
module.exports = UsersController