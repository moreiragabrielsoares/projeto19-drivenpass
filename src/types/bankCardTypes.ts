import { bankCards } from "@prisma/client";

export type INewBankCard = Omit< bankCards, "id" | "userId" | "createdAt" >;

export type ICreateBankCard = Omit< bankCards, "id" | "createdAt" >;