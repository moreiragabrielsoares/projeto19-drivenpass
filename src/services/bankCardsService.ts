import * as bankCardsRepository from '../repositories/bankCardsRepository';
import * as utilsFunctions from '../utils/functions';
import { INewBankCard } from '../types/bankCardTypes';


export async function findUserBankCardsByUserId (userId: number) {

    const userBankCards = await bankCardsRepository.findUserBankCardsByUserId(userId);

    for (let i = 0 ; i < userBankCards.length ; i++) {
        const decryptedPassword = utilsFunctions.decryptDataWithCryptr(userBankCards[i].password);
        userBankCards[i].password = decryptedPassword;
        const decryptedSecurityCode = utilsFunctions.decryptDataWithCryptr(userBankCards[i].securityCode);
        userBankCards[i].securityCode = decryptedSecurityCode;
    }

    return userBankCards;
}


export async function findBankCardById (bankCardId: number, userId: number) {

    const bankCard = await bankCardsRepository.findBankCardById(bankCardId);

    if (!bankCard) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (bankCard?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    const decryptedPassword = utilsFunctions.decryptDataWithCryptr(bankCard.password);
    bankCard.password = decryptedPassword;
    const decryptedSecurityCode = utilsFunctions.decryptDataWithCryptr(bankCard.securityCode);
    bankCard.securityCode = decryptedSecurityCode;

    return bankCard;
}


export async function deleteBankCardById (bankCardId: number, userId: number) {

    const bankCard = await bankCardsRepository.findBankCardById(bankCardId);

    if (!bankCard) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (bankCard?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    await bankCardsRepository.deleteBankCardById(bankCardId);

    return;
}


async function checkDuplicateTitle (userId: number, title: string) {

    const userBankCardTitle = await bankCardsRepository.findUserBankCardTitle(userId, title);

    if (userBankCardTitle) {
        throw {type: 'Conflict', message: 'This title is already used'};
    }

    return;
}

export async function createNewBankCard (newBankCard: INewBankCard, userId: number) {

    await checkDuplicateTitle(userId, newBankCard.title);
    
    const encryptedPassword = utilsFunctions.encryptDataWithCryptr(newBankCard.password);
    newBankCard.password = encryptedPassword;
    const encryptedSecurityCode = utilsFunctions.encryptDataWithCryptr(newBankCard.securityCode);
    newBankCard.securityCode = encryptedSecurityCode;
    const newBankCardData = { ... newBankCard, userId };

    await bankCardsRepository.insertNewBankCard(newBankCardData);

    return;
}