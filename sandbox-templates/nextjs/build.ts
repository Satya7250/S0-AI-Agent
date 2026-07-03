
import { Template, defaultBuildLogger } from 'e2b'
import { template as nextJSTemplate } from './template'
import dotenv from 'dotenv'
dotenv.config()


Template.build(nextJSTemplate , "s0-build" , {
    cpuCount: 4,
    memoryMB: 4096,
    onBuildLogs: defaultBuildLogger(),
    apiKey:"e2b_95af16dfdca408de7fb62fd4e5ad828e01076d2a"
})