import prisma from '../database/database';
import { CreateNewUserData } from '../types/authTypes';



export async function findUserByEmail (email: string) {

    return prisma.users.findFirst({
        where: { email }
    });
}

export async function insertNewUser(newUserData: CreateNewUserData) {
    
    await prisma.users.create({
        data: newUserData
    }); 
}