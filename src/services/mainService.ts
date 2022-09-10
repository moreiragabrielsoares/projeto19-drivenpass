import * as mainRepository from '../repositories/mainRepository';




export async function findSummaryUserData (userId: number) {

    const userData = await mainRepository.findSummaryUserData(userId);

    return userData;

}