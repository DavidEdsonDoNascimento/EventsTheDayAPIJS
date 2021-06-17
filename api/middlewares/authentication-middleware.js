import * as jwt from './../config/jwt';
import db from './../models';

export default class AuthenticationMiddleware 
{
    static async authentication(req, res, next){
        
        try {
            
            const [, token] = req.headers.authorization.split(' ');
            const payload = jwt.verify(token);            
            const user = await db.Users.findOne({ where: { id: payload.userId }});
            
            if(!user) {
                throw new Error('Nenhum usuário encontrado.');
            }

            return next();

        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}