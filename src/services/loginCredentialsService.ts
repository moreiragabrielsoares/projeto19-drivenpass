import * as loginCredentialsRepository from '../repositories/loginCredentialsRepository';
import * as utilsFunctions from '../utils/functions';
import { INewLoginCredential } from '../types/loginCredentialsTypes';



export async function findUserLoginCredentialsByUserId (userId: number) {

    const userLoginCredentials = await loginCredentialsRepository.findUserLoginCredentialsByUserId(userId);

    for (let i = 0 ; i < userLoginCredentials.length ; i++) {
        const decryptedPassword = utilsFunctions.decryptDataWithCryptr(userLoginCredentials[i].userPassword);
        userLoginCredentials[i].userPassword = decryptedPassword;
    }

    return userLoginCredentials;
}


export async function findLoginCredentialById (loginCredentialId: number, userId: number) {

    const loginCredential = await loginCredentialsRepository.findLoginCredentialById(loginCredentialId);

    if (!loginCredential) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (loginCredential?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    const decryptedPassword = utilsFunctions.decryptDataWithCryptr(loginCredential.userPassword);
    loginCredential.userPassword = decryptedPassword;

    return loginCredential;
}


async function checkDuplicateTitle (userId: number, title: string) {

    const userLoginCredentialTitle = await loginCredentialsRepository.findUserLoginCredentialTitle(userId, title);

    if (userLoginCredentialTitle) {
        throw {type: 'Conflict', message: 'This title is already used'};
    }

    return;
}

export async function createNewLoginCredential (newLoginCredential: INewLoginCredential, userId: number) {

    await checkDuplicateTitle(userId, newLoginCredential.title);
    
    const encryptedPassword = utilsFunctions.encryptDataWithCryptr(newLoginCredential.userPassword);
    newLoginCredential.userPassword = encryptedPassword;
    const newLoginCredentialData = { ... newLoginCredential, userId };

    await loginCredentialsRepository.insertNewLoginCredential(newLoginCredentialData);

    return;
}