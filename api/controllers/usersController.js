import db from './../models';
import * as jwt from './../config/jwt';
import crypto from 'crypto';

export default class UsersController
{
    /**
     * create user account
     * @param {*} req Request
     * @param {*} res Response
     * @returns Json
     */
    static async sign(req, res) 
    {
        try {
            
            const { email, password } = req.body;
            
            const encryptPassword = crypto.createHash('md5').update(password).digest('hex');
            
            const user = await db.Users.create({ email: email, password: encryptPassword });
            
            const token = jwt.sign({ userId: user.id });
            
            return res.status(200).json({ user: user, token: token });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

     /**
     * login to user account
     * @param {*} req Request
     * @param {*} res Response
     * @returns Json
     */
    static async login(req, res)
    {
        try {
            
            const [, hash ] = req.headers.authorization.toString().split(' ');
            
            const [ email, password ] = Buffer.from(hash, 'base64').toString().split(':');

            const encryptPassword = crypto.createHash('md5').update(password).digest('hex');

            const user = await db.Users.findOne({ where: { email: email, password: encryptPassword }});

            if(!user){
                throw new Error('Nenhum usuário encontrado.');
            }

            const token = jwt.sign({ userId: user.id });

            res.set('Authorization', token);

            return res.status(200).json({ user: user });
        } catch (error) {
            return res.status(401).json(error.message);
        }
    }
}