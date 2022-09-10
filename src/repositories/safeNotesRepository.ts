import prisma from '../database/database';
import { ICreateSafeNote } from '../types/safeNotesTypes';


export async function findUserSafeNotesByUserId (userId: number) {

    const userSafeNotes = await prisma.safeNotes.findMany({
        where: { userId }
    });

    return userSafeNotes;
}

export async function findSafeNoteById (safeNoteId: number) {

    const safeNote = await prisma.safeNotes.findUnique({
        where: {id: safeNoteId}
    });

    return safeNote;
}

export async function deleteSafeNoteById (safeNoteId: number) {

    await prisma.safeNotes.delete({
        where: {id: safeNoteId}
    });

    return;
}

export async function findUserSafeNoteTitle (userId: number, title: string) {

    const userSafeNoteTitle = await prisma.safeNotes.findFirst({
        where: {
            userId,
            title
        }
    });

    return userSafeNoteTitle;
}


export async function insertNewSafeNote (newSafeNoteData: ICreateSafeNote) {

    await prisma.safeNotes.create({
        data: newSafeNoteData
    });
}