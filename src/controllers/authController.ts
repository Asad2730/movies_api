import { type Request, type Response } from "express";

export const Login = async(req: Request, res: Response) => {
    try {
     const {email,password,password_confirmation} = req.body
    } catch (ex) {

    }
}


export const Register = async(req: Request, res: Response) => {
    try {
        const {name,email,password,password_confirmation} = req.body
        
    } catch (ex) {

    }
}