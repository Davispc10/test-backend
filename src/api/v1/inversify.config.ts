import { Container } from 'inversify';
import CreateBattleHandler from './handlers/CreateBattleHandler';
import GetPokemonHandler from './handlers/GetPokemonHandler';
import GetRandomPokemonHandler from './handlers/GetRandomPokemonHandler';
import ListPokemonHandler from './handlers/ListPokemonHandler';
import IPokemonRepository from './repository/IPokemonRepository';
import PokemonRepository from './repository/typeorm/PokemonRepository';
import CreateBattleService from './service/CreateBattleService';
import GetPokemonService from './service/GetPokemonService';
import ListPokemonService from './service/ListPokemonService';
import { TYPES } from './types';

const container = new Container();

container.bind<IPokemonRepository>(TYPES.IPokemonRepository).to(PokemonRepository);
container.bind<ListPokemonService>(TYPES.ListPokemonService).to(ListPokemonService);
container.bind<GetPokemonService>(TYPES.GetPokemonService).to(GetPokemonService);
container.bind<ListPokemonHandler>(TYPES.ListPokemonHandler).to(ListPokemonHandler);
container.bind<GetPokemonHandler>(TYPES.GetPokemonHandler).to(GetPokemonHandler);
container.bind<GetRandomPokemonHandler>(TYPES.GetRandomPokemonHandler).to(GetRandomPokemonHandler);
container.bind<CreateBattleHandler>(TYPES.CreateBattleHandler).to(CreateBattleHandler);
container.bind<CreateBattleService>(TYPES.CreateBattleService).to(CreateBattleService);

export { container };
