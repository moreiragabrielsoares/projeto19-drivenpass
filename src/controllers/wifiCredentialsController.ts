import { Request, Response } from 'express';

import * as wifiCredentialsService from '../services/wifiCredentialsService';
import { INewWifiCredential } from '../types/wifiCredentialsTypes';


export async function findUserWifiCredentialsByUserId (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const userWifiCredentials = await wifiCredentialsService.findUserWifiCredentialsByUserId(userId);

    res.status(200).send(userWifiCredentials);
}

export async function createNewWifiCredential (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const newWifiCredential: INewWifiCredential = req.body;

    await wifiCredentialsService.createNewWifiCredential(newWifiCredential, userId);

    res.status(201).send('New wifi credential created');
}

export async function findWifiCredentialById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const wifiCredentialId = parseInt(req.params.id);

    const wifiCredential = await wifiCredentialsService.findWifiCredentialById(wifiCredentialId, userId);

    res.status(200).send(wifiCredential);
}


export async function deleteWifiCredentialById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const wifiCredentialId = parseInt(req.params.id);

    await wifiCredentialsService.deleteWifiCredentialById(wifiCredentialId, userId);

    res.status(200).send('Ok');
}