
import './config/module-alias'
import 'reflect-metadata'

import { app } from '@/main/config/app'
import { env } from '@/main/config/env'
import { postgresDataSource } from '@/infra/db/helpers'

postgresDataSource
  .initialize()
  .then(() => app.listen(env.port, () => { console.log(`Server running at http://localhost:${env.port}`) }))
  .catch(console.error)
