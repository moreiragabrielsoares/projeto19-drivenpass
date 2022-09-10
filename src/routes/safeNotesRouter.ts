import { Router } from 'express';

import validateUser from '../middlewares/validateUser';
import validateSchema from '../middlewares/schemaValidator';
import { createSafeNoteSchema } from '../schemas/safeNotesSchemas';
import * as safeNotesController from '../controllers/safeNotesController';



const safeNotesRouter = Router();


safeNotesRouter.get(
    '/safe-notes', 
    validateUser, 
    safeNotesController.findUserSafeNotesByUserId
);

safeNotesRouter.get(
    '/safe-notes/:id', 
    validateUser, 
    safeNotesController.findSafeNoteById
);

safeNotesRouter.delete(
    '/safe-notes/:id', 
    validateUser, 
    safeNotesController.deleteSafeNoteById
);

safeNotesRouter.post(
    '/safe-notes',
    validateSchema(createSafeNoteSchema), 
    validateUser, 
    safeNotesController.createNewSafeNote
);



export default safeNotesRouter;