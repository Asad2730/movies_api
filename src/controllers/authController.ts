import { type Request, type Response } from "express";
import { LoginService, RegisterService } from "../services/authService";

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const loginService = await LoginService(email, password)
         res.json(loginService)
    } catch (ex) {
         res.json(ex)
    }
}


export const Register = async (req: Request, res: Response) => {
    try {
        const registerService = await RegisterService(req.body)
         res.json(registerService)
    } catch (ex) {
         res.json(ex)
    }
}