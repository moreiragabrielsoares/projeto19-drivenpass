import dotenv from 'dotenv';
import { CreateNewUserData } from '../types/authTypes';
import * as authRepository from '../repositories/authRepository';
import * as utilsFunctions from '../utils/functions';


dotenv.config();


export async function signUpNewUser (newUserData: CreateNewUserData) {
    
    await checkDuplicateEmail(newUserData.email);

    const encryptedPassword = utilsFunctions.encryptDataWithBcrypt(newUserData.password);

    newUserData.password = encryptedPassword;

    await authRepository.insertNewUser(newUserData);
    
    return;
}

export async function checkDuplicateEmail (email: string) {

    const user = await authRepository.findUserByEmail(email);

    if (user) {
        throw {type: 'Conflict', message: 'This email is already registered'};
    }

    return;
}