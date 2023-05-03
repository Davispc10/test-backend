import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreatePokemonUseCase } from './create-pokemon-use-case'
import { HttpResponse } from '@shared/helpers'
import { ImportXlsx } from '@utils/import-xlsx'

class CreatePokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {file} = request;
    const importXlsx = new ImportXlsx()
     const data =  await importXlsx.handle(file)    

    // const {
    //   nome,
    //   nomeMae,
    //   nomePai,
    //   cep,
    //   dataNascimento,
    // } = request.body
    


      const createPokemonUseCase = container.resolve(CreatePokemonUseCase)

      const result = await createPokemonUseCase.execute(data)
        .then(pokemonResult => {
          return pokemonResult
        })
        .catch(error => {
          return error
        })

    return response.status(result.statusCode).json(result)
  }
}

export { CreatePokemonController }
