import { Test } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { testingModule } from '../testmodule/test.module';

describe('PokemonService', () => {
  let pokemonService: PokemonService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [...testingModule()],
      providers: [PokemonService],
    }).compile();

    pokemonService = module.get<PokemonService>(PokemonService);
  });

  it('pokemonService should be defined', async () => {
    expect(pokemonService).toBeDefined();
  });

  describe('find', () => {
    it('should return an array of 10 legendary pokemon', async () => {
      const result = await pokemonService.find({ legendary: true });

      expect(result).toHaveLength(10);
    });
  });
});
