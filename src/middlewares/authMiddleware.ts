import { type NextFunction, type Request, type Response } from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret: string = process.env.JWT_SECRET as string;

declare module 'express-serve-static-core' {
    interface Request {
        email?: string;
    }
}

export const generateToken = (email: string) => {
    return jwt.sign({ email: email }, secret, { expiresIn: '2hr' })
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {

    const token = req.header('Authorization');
    if (!token) {
        res.json({ error: 'Access denied' });
        return
    }
    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        req.email = decoded.email;
        next();
    } catch (error) {
        res.json({ error: 'Invalid token' });
    }
};




export const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


export const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,14}$)/;
    return passwordRegex.test(password)
}


