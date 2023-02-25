import {registerAs} from '@nestjs/config'
interface DataBaseConfig {
    readonly host: string;
    readonly port:number;
    readonly username:string;
    readonly password:string;
    readonly database:string
}

export const databasaConfig = registerAs ('database', (): DataBaseConfig => ({
    host: process.env.DB_HOST ? String(process.env.DB_HOST):undefined,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT):undefined,
    username: process.env.DB_USERNAME ? String(process.env.DB_USERNAME):undefined,
    password:process.env.DB_PASSWORD ? String(process.env.DB_PASSWORD):undefined,
    database:process.env.DB_DATABASE ? String(process.env.DB_DATABASE):undefined

}))
