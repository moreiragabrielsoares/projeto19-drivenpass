import joi from 'joi';
import { INewLoginCredential } from '../types/loginCredentialsTypes';




export const createLoginCredentialSchema = joi.object<INewLoginCredential>({
    title: joi.string().required(),
    url: joi.string().uri().required(),
    userName: joi.string().required(),
    userPassword: joi.string().required()
})