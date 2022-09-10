import { Router } from 'express';
import validateUser from '../middlewares/validateUser';

import * as loginCredentialsController from '../controllers/loginCredentialsController';
import validateSchema from '../middlewares/schemaValidator';
import { createLoginCredentialSchema } from '../schemas/loginCredentialsSchemas';


const loginCredentialsRouter = Router();

loginCredentialsRouter.get(
    '/login-credentials', 
    validateUser, 
    loginCredentialsController.findUserLoginCredentialsByUserId
);

loginCredentialsRouter.get(
    '/login-credentials/:id', 
    validateUser, 
    loginCredentialsController.findLoginCredentialById
);

loginCredentialsRouter.delete(
    '/login-credentials/:id', 
    validateUser, 
    loginCredentialsController.deleteLoginCredentialById
);

loginCredentialsRouter.post(
    '/login-credentials',
    validateSchema(createLoginCredentialSchema), 
    validateUser, 
    loginCredentialsController.createNewLoginCredential
);

export default loginCredentialsRouter;