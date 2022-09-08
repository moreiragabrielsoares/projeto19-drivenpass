import { Request, Response } from 'express';

import * as authService from '../services/authService';
import { CreateNewUserData } from '../types/authTypes';


export async function signUpNewUser(req: Request, res: Response) {

    const newUserData: CreateNewUserData = req.body;

    await authService.signUpNewUser(newUserData);

    res.status(201).send('New register created');

}