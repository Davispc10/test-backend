import { Router } from 'express'
import { CreatePessoaController } from '@modules/operation/use-cases/pessoa/create-pessoa/create-pessoa-controller'
import { ListPessoaController } from '@modules/operation/use-cases/pessoa/list-pessoa/list-pessoa-controller'
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated'

const pessoaRoutes = Router()

const createPessoaController = new CreatePessoaController()
const listPessoaController = new ListPessoaController()

pessoaRoutes.post('/', ensureAuthenticated, createPessoaController.handle )
pessoaRoutes.post('/list', ensureAuthenticated, listPessoaController.handle)

export { pessoaRoutes }
