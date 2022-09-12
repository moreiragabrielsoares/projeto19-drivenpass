import prisma from '../database/database';
import { ICreateWifiCredential } from '../types/wifiCredentialsTypes';


export async function findUserWifiCredentialsByUserId (userId: number) {

    const userWifiCredentials = await prisma.wifiCredentials.findMany({
        where: { userId }
    });

    return userWifiCredentials;
}

export async function findWifiCredentialById (wifiCredentialId: number) {

    const wifiCredential = await prisma.wifiCredentials.findUnique({
        where: {id: wifiCredentialId}
    });

    return wifiCredential;
}

export async function deleteWifiCredentialById (wifiCredentialId: number) {

    await prisma.wifiCredentials.delete({
        where: {id: wifiCredentialId}
    });

    return;
}

export async function findUserWifiCredentialTitle (userId: number, title: string) {

    const userWifiCredentialTitle = await prisma.wifiCredentials.findFirst({
        where: {
            userId,
            title
        }
    });

    return userWifiCredentialTitle;
}


export async function insertNewWifiCredential (newWifiCredentialData: ICreateWifiCredential) {

    await prisma.wifiCredentials.create({
        data: newWifiCredentialData
    });
}