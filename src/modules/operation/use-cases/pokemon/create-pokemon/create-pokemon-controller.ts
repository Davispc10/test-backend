import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreatePokemonUseCase } from './create-pokemon-use-case'
import { HttpResponse } from '@shared/helpers'
import { ImportXlsx } from '@utils/import-xlsx'
import fs from 'fs'

class CreatePokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {file} = request;
    const importXlsx = new ImportXlsx()
     const data =  await importXlsx.handle(file)    

      const createPokemonUseCase = container.resolve(CreatePokemonUseCase)

      const result = await createPokemonUseCase.execute(data)
        .then(pokemonResult => {
          fs.unlink(file.path,((err) => {
            if(err) console.log(err.message)
          }))
          return pokemonResult
        })
        .catch(error => {
          return error
        })

    return response.status(result.statusCode).json(result)
  }
}

export { CreatePokemonController }
