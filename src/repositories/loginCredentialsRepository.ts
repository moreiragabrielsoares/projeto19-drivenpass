import { loginCredentials } from '@prisma/client';
import prisma from '../database/database';
import { ICreateLoginCredential } from '../types/loginCredentialsTypes';



export async function findUserLoginCredentialsByUserId (userId: number) {

    const userLoginCredentials = await prisma.loginCredentials.findMany({
        where: { userId }
    });

    return userLoginCredentials;
}

export async function findUserLoginCredentialTitle (userId: number, title: string) {

    const userLoginCredentialTitle = await prisma.loginCredentials.findFirst({
        where: {
            userId,
            title
        }
    });

    return userLoginCredentialTitle;
}


export async function insertNewLoginCredential (newLoginCredentialData: ICreateLoginCredential) {

    await prisma.loginCredentials.create({
        data: newLoginCredentialData
    });

}