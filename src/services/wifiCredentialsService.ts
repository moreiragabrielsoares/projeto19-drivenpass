import * as wifiCredentialsRepository from '../repositories/wifiCredentialsRepository';
import { INewWifiCredential } from '../types/wifiCredentialsTypes';
import * as utilsFunctions from '../utils/functions';


export async function findUserWifiCredentialsByUserId (userId: number) {

    const userWifiCredentials = await wifiCredentialsRepository.findUserWifiCredentialsByUserId(userId);

    for (let i = 0 ; i < userWifiCredentials.length ; i++) {
        const decryptedPassword = utilsFunctions.decryptDataWithCryptr(userWifiCredentials[i].password);
        userWifiCredentials[i].password = decryptedPassword;
    }

    return userWifiCredentials;
}


export async function findWifiCredentialById (wifiCredentialId: number, userId: number) {

    const wifiCredential = await wifiCredentialsRepository.findWifiCredentialById(wifiCredentialId);

    if (!wifiCredential) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (wifiCredential?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    const decryptedPassword = utilsFunctions.decryptDataWithCryptr(wifiCredential.password);
    wifiCredential.password = decryptedPassword;

    return wifiCredential;
}


export async function deleteWifiCredentialById (wifiCredentialId: number, userId: number) {

    const wifiCredential = await wifiCredentialsRepository.findWifiCredentialById(wifiCredentialId);

    if (!wifiCredential) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (wifiCredential?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    await wifiCredentialsRepository.deleteWifiCredentialById(wifiCredentialId);

    return;
}


//async function checkDuplicateTitle (userId: number, title: string) {
//
//    const userWifiCredentialTitle = await wifiCredentialsRepository.findUserWifiCredentialTitle(userId, title);
//
//    if (userWifiCredentialTitle) {
//        throw {type: 'Conflict', message: 'This title is already used'};
//    }
//
//    return;
//}

export async function createNewWifiCredential (newWifiCredential: INewWifiCredential, userId: number) {

    //await checkDuplicateTitle(userId, newWifiCredential.title);
    
    const encryptedPassword = utilsFunctions.encryptDataWithCryptr(newWifiCredential.password);
    newWifiCredential.password = encryptedPassword;
    const newWifiCredentialData = { ... newWifiCredential, userId };

    await wifiCredentialsRepository.insertNewWifiCredential(newWifiCredentialData);

    return;
}