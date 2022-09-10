import { Request, Response } from 'express';

import * as safeNotesService from '../services/safeNotesService'
import { INewSafeNote } from '../types/safeNotesTypes';





export async function findUserSafeNotesByUserId (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const userSafeNotes = await safeNotesService.findUserSafeNotesByUserId(userId);

    res.status(200).send(userSafeNotes);
}

export async function createNewSafeNote (req: Request, res: Response) {

    const userId = res.locals.session.userId;

    const newSafeNote: INewSafeNote = req.body;

    await safeNotesService.createNewSafeNote(newSafeNote, userId);

    res.status(201).send('New safe note created');
}

export async function findSafeNoteById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const safeNoteId = parseInt(req.params.id);

    const safeNote = await safeNotesService.findSafeNoteById(safeNoteId, userId);

    res.status(200).send(safeNote);
}


export async function deleteSafeNoteById (req: Request, res: Response) {

    const userId = res.locals.session.userId;
    const safeNoteId = parseInt(req.params.id);

    await safeNotesService.deleteSafeNoteById(safeNoteId, userId);

    res.status(200).send('Ok');
}