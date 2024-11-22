
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import type { IUser } from '../models/user';
import User from '../models/user';
import { isValidEmail, isPasswordValid } from '../middlewares/authMiddleware';

dotenv.config();


const secret: string = process.env.JWT_SECRET as string

export const RegisterService = async (user: IUser) => {
    try {

        if (user.password !== user.password_confirmation) return Promise.reject(`Password and Confirm password not same`)
        if (!user.name || !user.password || !user.email) return Promise.reject(`Name, email, and password must not be empty`)

        if (!isValidEmail(user.email)) return Promise.reject(`Email id  not valid`)

        if (!isPasswordValid(user.password)) return Promise.reject(`Password must be between 6 to 14 characters long, contain at
      least one uppercase letter and one special character`);

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const userBody = {
            name: user.name,
            email: user.email,
            password: hashedPassword,
        };
        const response = await User.create(userBody)
        if (response.errors) return Promise.reject(`Rejected Request with errors ${response.errors}`)
        return Promise.resolve(response)
    } catch (err) {
        return Promise.reject(`Error Registering User ${err}`)
    }
}


export const LoginService= async (email: string, password: string) => {
    try {
        const user = await User.findOne({ email })
        if (!user) return Promise.reject(`user Login failed! no user found with email id ${email}`)
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) return Promise.reject(`userentication failed! invalid password`)

        const token: string = jwt.sign({ userId: user.id }, secret, { expiresIn: '2hr' })

        const response: any = { user, token }
        return Promise.resolve(response)
    } catch (err) {
        return Promise.reject(`Error userenticating User ${err}`)
    }
}


