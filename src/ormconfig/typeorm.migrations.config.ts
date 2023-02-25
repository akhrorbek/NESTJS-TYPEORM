import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmModuleAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async(): Promise<TypeOrmModuleOptions> => {
        return {
            type:'postgres',
            host:process.env.DB_HOST,
            port:process.env.DB_PORT,
            password:process.env.DB_PASSWORD,
            username:process.env.DB_USERNAME,
            database:process.env.DB_DATABASE,
            entities:[
                __dirname + '/../**/*.entity.{ts,js}'
            ],
            migrations:[
                __dirname + '/../migrations/*{.ts,.js}'
            ],
            logging:true,
            synchronize: true,
            cli : {
                migrationsDir: __dirname + '/../migrations',
            },
        }
    }
}

export const typeormConfig:TypeOrmModuleOptions = {

    type:'postgres',
    url:process.env.DATABASE,
    entities:[
        __dirname + '/../**/*.entity.{ts,js}'
    ],
    migrations:[
        __dirname + '/../migrations/*{.ts,.js}'
    ],
    logging:true,
    synchronize: true,
    cli : {
        migrationsDir: __dirname + '/../migrations',
    }
}
