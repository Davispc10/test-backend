import 'dotenv/config'

export const env = {
  port: process.env.PORT,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE ?? false
  }
}
