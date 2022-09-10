import { Router } from 'express';
import validateUser from '../middlewares/validateUser';

import * as mainController from '../controllers/mainController';


const mainRouter = Router();

mainRouter.get('/main', validateUser, mainController.findSummaryUserData);


export default mainRouter;