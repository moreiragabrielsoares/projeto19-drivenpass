
import JoiImport from 'joi';
import DateExtension from '@joi/date';
const joi = JoiImport.extend(DateExtension) as typeof JoiImport;
import { INewBankCard } from '../types/bankCardTypes';


export const createBankCardSchema = joi.object<INewBankCard>({
    title: joi.string().required(),
    number: joi.string().length(19).pattern(/^\d{4}-\d{4}-\d{4}-\d{4}$/).required(),
    name: joi.string().required(),
    securityCode: joi.string().length(3).pattern(/^[0-9]*$/).required(),
    expirationDate: joi.date().format("MM/YY").required(),
    isVirtual: joi.boolean().strict().required(),
    type: joi.string().valid('credit', 'debit', 'both').required(),
    password: joi.string().min(4).max(6).pattern(/^[0-9]*$/).required(),
})