import { Router } from 'express';

import validateUser from '../middlewares/validateUser';
import validateSchema from '../middlewares/schemaValidator';
import { createBankCardSchema } from '../schemas/bankCardsSchemas';
import * as bankCardsController from '../controllers/bankCardsController';





const bankCardsRouter = Router();

bankCardsRouter.get(
    '/bank-cards', 
    validateUser, 
    bankCardsController.findUserBankCardsByUserId
);

bankCardsRouter.get(
    '/bank-cards/:id', 
    validateUser, 
    bankCardsController.findBankCardById
);

bankCardsRouter.delete(
    '/bank-cards/:id', 
    validateUser, 
    bankCardsController.deleteBankCardById
);

bankCardsRouter.post(
    '/bank-cards',
    validateSchema(createBankCardSchema), 
    validateUser, 
    bankCardsController.createNewBankCard
);

export default bankCardsRouter;