import { Router } from 'express'
import { CreatePokemonController } from '@modules/operation/use-cases/pokemon/create-pokemon/create-pokemon-controller'
import { ListPokemonController } from '@modules/operation/use-cases/pokemon/list-pokemon/list-pokemon-controller'
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated'
import multer from 'multer'
import uploadConfig from '@config/upload'

const pessoaRoutes = Router()

const uploadXlsx = multer(uploadConfig)

const createPokemonController = new CreatePokemonController()
const listPokemonController = new ListPokemonController()

pessoaRoutes.post('/', ensureAuthenticated, uploadXlsx.single('file'), createPokemonController.handle )
pessoaRoutes.post('/list', ensureAuthenticated, listPokemonController.handle)

export { pessoaRoutes }
