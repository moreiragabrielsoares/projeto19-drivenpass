import { users } from '@prisma/client';
import { sessions } from '@prisma/client';


export type ICreateNewUserData = Omit< users, "id" | "createdAt" >;

export type ILoginUserData = Omit< users, "id" | "createdAt" >;

export type ICreateNewSession = Omit< sessions, "id" | "createdAt" >;