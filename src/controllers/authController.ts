import { Request, Response } from 'express';

import * as authService from '../services/authService';
import { ICreateNewUserData } from '../types/authTypes';


export async function signUpNewUser(req: Request, res: Response) {

    const newUserData: ICreateNewUserData = req.body;

    await authService.signUpNewUser(newUserData);

    res.status(201).send('New register created');

}