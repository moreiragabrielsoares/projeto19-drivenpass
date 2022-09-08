import { Router } from 'express';

import validateSchema from '../middlewares/schemaValidator';
import * as authSchemas from '../schemas/authSchemas';
import * as authController from '../controllers/authController';



const authRouter = Router();

authRouter.post('/signup', validateSchema(authSchemas.signUpNewUserSchema), authController.signUpNewUser);


export default authRouter;