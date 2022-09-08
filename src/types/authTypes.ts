import { users } from '@prisma/client';


export type CreateNewUserData = Omit<users, "id" | "createdAt">;