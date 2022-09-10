import prisma from '../database/database';
import { ISummaryUserData } from '../types/authTypes';



export async function findSummaryUserData (userId: number) {

    const userData = await prisma.users.findUnique({
        where: {
            id: userId
        },
        include: {
            _count: {
                select: {
                    loginCredentials: true,
                    safeNotes: true,
                    bankCards: true,
                    wifiCredentials: true
                },
            }
        }
    })

    const summaryUserData: ISummaryUserData = {userId: userData!.id, summary: userData!._count};
    
    return summaryUserData;
}