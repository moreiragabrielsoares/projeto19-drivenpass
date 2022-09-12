import joi from 'joi';
import { INewWifiCredential } from '../types/wifiCredentialsTypes';


export const createWifiCredentialSchema = joi.object<INewWifiCredential>({
    title: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required()
})