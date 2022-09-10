import { Request, Response } from 'express';

import * as loginCredentialsService from '../services/loginCredentialsService';
import { INewLoginCredential } from '../types/loginCredentialsTypes';



export async function findUserLoginCredentialsByUserId (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const userLoginCredentials = await loginCredentialsService.findUserLoginCredentialsByUserId(userId);

    res.status(200).send(userLoginCredentials);
}

export async function createNewLoginCredential (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const newLoginCredential: INewLoginCredential = req.body;

    await loginCredentialsService.createNewLoginCredential(newLoginCredential, userId);

    res.status(201).send('New login credential created');
}

export async function findLoginCredentialById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const loginCredentialId = parseInt(req.params.id);

    const loginCredential = await loginCredentialsService.findLoginCredentialById(loginCredentialId, userId);

    res.status(200).send(loginCredential);
}