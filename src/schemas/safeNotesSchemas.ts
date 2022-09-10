import joi from 'joi';
import { INewSafeNote } from '../types/safeNotesTypes';


export const createSafeNoteSchema = joi.object<INewSafeNote>({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
})