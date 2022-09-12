import { Router } from 'express';

import validateUser from '../middlewares/validateUser';
import validateSchema from '../middlewares/schemaValidator';
import { createWifiCredentialSchema } from '../schemas/wifiCredentialsSchemas';
import * as wifiCredentialsController from '../controllers/wifiCredentialsController';

const wifiCredentialsRouter = Router();

wifiCredentialsRouter.get(
    '/wifi-credentials', 
    validateUser, 
    wifiCredentialsController.findUserWifiCredentialsByUserId
);

wifiCredentialsRouter.get(
    '/wifi-credentials/:id', 
    validateUser, 
    wifiCredentialsController.findWifiCredentialById
);

wifiCredentialsRouter.delete(
    '/wifi-credentials/:id', 
    validateUser, 
    wifiCredentialsController.deleteWifiCredentialById
);

wifiCredentialsRouter.post(
    '/wifi-credentials',
    validateSchema(createWifiCredentialSchema), 
    validateUser, 
    wifiCredentialsController.createNewWifiCredential
);

export default wifiCredentialsRouter;