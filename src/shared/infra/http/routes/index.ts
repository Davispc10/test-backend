import { Router } from 'express'
import { authenticateRoutes } from './authentication/authenticate-routes'
import { usersRoutes } from './authentication/users-routes'


import { pessoaRoutes } from './operation/pokemon-routes'


const router = Router()

router.use(authenticateRoutes)

router.use('/users', usersRoutes)
router.use('/pokemons', pessoaRoutes)


export { router }
