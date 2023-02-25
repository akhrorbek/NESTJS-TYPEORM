import { registerAs } from "@nestjs/config";

interface AppConfig {
    readonly host: string;
    readonly port: number;
}
export const AppConfig = registerAs('app', (): AppConfig => ({
    host:process.env.APP_HOST ? String(process.env.APP_HOST):undefined,
    port:process.env.APP_PORT ? Number(process.env.APP_PORT):undefined
}))