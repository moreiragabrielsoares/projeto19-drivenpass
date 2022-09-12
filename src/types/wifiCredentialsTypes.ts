import { wifiCredentials } from "@prisma/client";

export type INewWifiCredential = Omit< wifiCredentials, "id" | "userId" | "createdAt" >;

export type ICreateWifiCredential = Omit< wifiCredentials, "id" | "createdAt" >