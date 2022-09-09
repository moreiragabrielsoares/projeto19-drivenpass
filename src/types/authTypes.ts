import { users } from '@prisma/client';


export type ICreateNewUserData = Omit<users, "id" | "createdAt">;

export type ILoginUserData = Omit<users, "id" | "createdAt">;