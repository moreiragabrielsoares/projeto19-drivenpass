import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

export function encryptDataWithCryptr (data: string) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY!);
    const encryptedData = cryptr.encrypt(data);
    return encryptedData;
}

export function decryptDataWithCryptr (data: string) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY!);
    const decryptedData = cryptr.decrypt(data);
    return decryptedData;
}

export function encryptDataWithBcrypt(data: string) {
    const SALT = 10;
    const encryptedData = bcrypt.hashSync(data, SALT);
    return encryptedData;
}

export function compareDataBcrypt(data: string, encryptedData: string) {
    return bcrypt.compareSync(data, encryptedData);
}