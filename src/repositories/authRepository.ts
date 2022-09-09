import prisma from '../database/database';
import { ICreateNewUserData } from '../types/authTypes';



export async function findUserByEmail (email: string) {

    return prisma.users.findFirst({
        where: { email }
    });
}

export async function insertNewUser(newUserData: ICreateNewUserData) {
    
    await prisma.users.create({
        data: newUserData
    }); 
}