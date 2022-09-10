import { Request, Response } from 'express';

import * as mainService from '../services/mainService';



export async function findSummaryUserData(req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const userData = await mainService.findSummaryUserData(userId);

    res.status(200).send(userData);
}