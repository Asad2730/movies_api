import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import type { IUser } from '../models/user';
import User from '../models/user';
import { isValidEmail, isPasswordValid, generateToken } from '../middlewares/authMiddleware';



export const RegisterService = async (user: IUser) => {
  try {


    if (!user.name || !user.password || !user.email) {
      throw new Error('Name, email, and password must not be empty');
    }

    if (!isValidEmail(user.email)) {
      throw new Error('Email id not valid');
    }

    if (!isPasswordValid(user.password)) {
      throw new Error(
        'Password must be between 6 to 14 characters long, contain at least one uppercase letter and one special character'
      );
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const userBody = {
      name: user.name,
      email: user.email,
      password: hashedPassword,
    };


    const response = await User.create(userBody);

    if (response.errors) {
      throw new Error(`Rejected Request with errors ${response.errors}`);
    }

    return response;
  } catch (error) {

    throw new Error(`Error in RegisterService: ${error}`);
  }
};

export const LoginService = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(`Login failed! No user found with email id ${email}`);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Authentication failed! Invalid password');
    }

    const token = generateToken(user.email) 
    return token
  } catch (error) {
    throw new Error(`Error in LoginService: ${error}`);
  }
};
