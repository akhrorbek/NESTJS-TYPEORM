import { ConfigModuleOptions } from '@nestjs/config'
import { AppConfig } from './app'
import { databasaConfig } from './database'

export const config:ConfigModuleOptions = {
    load:[AppConfig, databasaConfig],
    cache: true,
    isGlobal: true,
}