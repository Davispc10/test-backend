import {
  LIST_POKEMONS_USE_CASE,
  ListPokemonsUseCase,
} from '../ports/in/list-pokemons.usecase';
import {
  LIST_POKEMONS_PORT,
  ListPokemonsPort,
} from '../ports/out/list-pokemons.port';
import { Test } from '@nestjs/testing';
import { ListPokemonsService } from './list-pokemons.service';
import { PokemonTestFactory } from '../../../../test/factory/pokemon-test.factory';
import { PaginationQueryDto } from '../../../@shared/dto/validation-query.dto';

describe('ListPokemonsService', () => {
  let service: ListPokemonsUseCase;
  let listPokemonsPort: ListPokemonsPort;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LIST_POKEMONS_USE_CASE,
          useClass: ListPokemonsService,
        },
        {
          provide: LIST_POKEMONS_PORT,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<ListPokemonsUseCase>(LIST_POKEMONS_USE_CASE);

    listPokemonsPort = moduleRef.get<ListPokemonsPort>(LIST_POKEMONS_PORT);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(listPokemonsPort).toBeDefined();
  });

  describe('when call execute method', () => {
    it('should should return a list of pokemons correctly', async () => {
      const pokemon = PokemonTestFactory.create();
      jest
        .spyOn(listPokemonsPort, 'execute')
        .mockResolvedValue([PokemonTestFactory.create()]);

      const result = await service.execute({} as PaginationQueryDto);
      expect(result[0].id).toBe(pokemon.id);
      expect(listPokemonsPort.execute).toHaveBeenCalledTimes(1);
    });

    it('should throw an expection', () => {
      jest
        .spyOn(listPokemonsPort, 'execute')
        .mockRejectedValueOnce(new Error());
      const result = () => service.execute({} as PaginationQueryDto);
      expect(result).rejects.toThrowError();
    });
  });
});
