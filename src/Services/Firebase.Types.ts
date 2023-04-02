import {ASSET_TYPE, TRANSACTION_TYPE} from '../engine/types';

export interface IUser {
    userID?: string
    createdAt?: any;
    updatedAt?: any;
    description: string;
    email: string;
    username?: string;
    name: string;
    firstName: string;
    lastName: string;
    phone: string;
    photo: string;
    token: string;
}

export interface ITransaction {
    id?: string;
    time: any;
    assetType: ASSET_TYPE;
    transactionType: TRANSACTION_TYPE,
}
