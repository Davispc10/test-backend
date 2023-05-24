import { NextFunction, Request, Response, Router } from 'express'
import multer from 'multer'
import { UploadFile } from '../../../../application/use-cases/upload-file'
import { BadRequestError } from '../../../../shared/errors/bad-request-error'
import { PrismaPokemonRepositoryDatabase } from '../../../database/prisma/repositories/prisma-pokemon-repository-database'

const uploadMiddleware = multer()
const uploadsRouter = Router()

uploadsRouter.post('/', uploadMiddleware.single('file'), async (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return next(new BadRequestError('file is required'))
  }
  if (req.file?.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    return next(new BadRequestError('invalid file. send a file of type xlsx'))
  }
  // const databaseConnection = new PgAdapter()
  // const pokemonRepository = new PokemonRepositoryDatabase(databaseConnection)
  const pokemonRepository = new PrismaPokemonRepositoryDatabase()
  const uploadFile = new UploadFile(pokemonRepository)
  const { buffer } = req.file
  await uploadFile.execute(buffer)
  res.status(201).json({})
})

export { uploadsRouter }
