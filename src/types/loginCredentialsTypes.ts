import { loginCredentials } from "@prisma/client";


export type INewLoginCredential = Omit< loginCredentials, "id" | "userId" | "createdAt" >;

export type ICreateLoginCredential = Omit< loginCredentials, "id" | "createdAt" >;