import prisma from '../database/database';
import { ICreateBankCard } from '../types/bankCardTypes';



export async function findUserBankCardsByUserId (userId: number) {

    const userBankCards = await prisma.bankCards.findMany({
        where: { userId }
    });

    return userBankCards;
}

export async function findBankCardById (bankCardId: number) {

    const bankCard = await prisma.bankCards.findUnique({
        where: {id: bankCardId}
    });

    return bankCard;
}

export async function deleteBankCardById (bankCardId: number) {

    await prisma.bankCards.delete({
        where: {id: bankCardId}
    });

    return;
}

export async function findUserBankCardTitle (userId: number, title: string) {

    const userBankCardTitle = await prisma.bankCards.findFirst({
        where: {
            userId,
            title
        }
    });

    return userBankCardTitle;
}


export async function insertNewBankCard (newBankCardData: ICreateBankCard) {

    await prisma.bankCards.create({
        data: newBankCardData
    });
}