import jwt from 'jsonwebtoken';

const secret = '7813d1590d28a7dd372ad54b5d29d033';

export const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 });
export const verify = token => jwt.verify(token, secret);