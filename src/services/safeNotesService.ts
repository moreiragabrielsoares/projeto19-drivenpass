import * as safeNotesRepository from '../repositories/safeNotesRepository';
import { INewSafeNote } from '../types/safeNotesTypes';




export async function findUserSafeNotesByUserId (userId: number) {

    const userSafeNotes = await safeNotesRepository.findUserSafeNotesByUserId(userId);

    return userSafeNotes;
}


export async function findSafeNoteById (safeNoteId: number, userId: number) {

    const safeNote = await safeNotesRepository.findSafeNoteById(safeNoteId);

    if (!safeNote) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (safeNote?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    return safeNote;
}


export async function deleteSafeNoteById (safeNoteId: number, userId: number) {

    const safeNote = await safeNotesRepository.findSafeNoteById(safeNoteId);

    if (!safeNote) {
        throw {type: 'NotFound', message: 'NotFound id'};
    }
    
    if (safeNote?.userId !== userId) {
        throw {type: 'Unauthorized', message: 'You do not have permission to access this id'};
    }

    await safeNotesRepository.deleteSafeNoteById(safeNoteId);

    return;
}


async function checkDuplicateTitle (userId: number, title: string) {

    const userSafeNoteTitle = await safeNotesRepository.findUserSafeNoteTitle(userId, title);

    if (userSafeNoteTitle) {
        throw {type: 'Conflict', message: 'This title is already used'};
    }

    return;
}

export async function createNewSafeNote (newSafeNote: INewSafeNote, userId: number) {

    await checkDuplicateTitle(userId, newSafeNote.title);
    
    const newSafeNoteData = { ... newSafeNote, userId };

    await safeNotesRepository.insertNewSafeNote(newSafeNoteData);

    return;
}