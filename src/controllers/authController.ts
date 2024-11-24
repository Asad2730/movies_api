import { type Request, type Response } from "express";
import { LoginService, RegisterService } from "../services/authService";

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const loginService = await LoginService(email, password);
        if (!loginService) {
            res.status(401).json({ error: 'Invalid credentials' });
            return
        }
        res.status(200).json(loginService);
    } catch (ex) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const Register = async (req: Request, res: Response) => {
    try {
        const registerService = await RegisterService(req.body);
        if(!registerService){
            res.status(401).json({ error: 'an error ocured!' });
            return
        }
        res.status(201).json(registerService);
    } catch (ex) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
