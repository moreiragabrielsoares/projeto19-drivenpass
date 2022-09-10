import { safeNotes } from "@prisma/client";

export type INewSafeNote = Omit< safeNotes, "id" | "userId" | "createdAt" >;

export type ICreateSafeNote = Omit< safeNotes, "id" | "createdAt" >