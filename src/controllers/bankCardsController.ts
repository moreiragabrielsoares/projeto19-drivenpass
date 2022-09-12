import { Request, Response } from 'express';

import * as bankCardsService from '../services/bankCardsService';
import { INewBankCard } from '../types/bankCardTypes';


export async function findUserBankCardsByUserId (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const userBankCards = await bankCardsService.findUserBankCardsByUserId(userId);

    res.status(200).send(userBankCards);
}

export async function createNewBankCard (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const newBankCard: INewBankCard = req.body;

    await bankCardsService.createNewBankCard(newBankCard, userId);

    res.status(201).send('New bank card created');
}

export async function findBankCardById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const bankCardId = parseInt(req.params.id);

    const bankCard = await bankCardsService.findBankCardById(bankCardId, userId);

    res.status(200).send(bankCard);
}


export async function deleteBankCardById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const bankCardId = parseInt(req.params.id);

    await bankCardsService.deleteBankCardById(bankCardId, userId);

    res.status(200).send('Ok');
}