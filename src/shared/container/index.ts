import { container } from 'tsyringe'

import '@shared/container/providers'

import { IUserRepository } from '@modules/authentication/repositories/i-user-repository'
import { UserRepository } from '@modules/authentication/infra/typeorm/repositories/user-repository'
import { IPokemonRepository} from '@modules/operation/repositories/i-pessoa-repository'
import { PokemonRepository } from '@modules/operation/infra/typeorm/repositories/pokemon-repository'
import { UserTokenRepository } from '@modules/authentication/infra/typeorm/repositories/user-token-repository'
import { IUserTokenRepository } from '@modules/authentication/repositories/i-user-token-repository';


container.registerSingleton<IUserTokenRepository>('UserTokenRepository', UserTokenRepository)
container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<IPokemonRepository>('PokemonRepository', PokemonRepository)

