const TYPES = {
  IPokemonRepository: Symbol.for('IPokemonRepository'),
  ListPokemonService: Symbol.for('ListPokemonService'),
  GetPokemonService: Symbol.for('GetPokemonService'),
  GetRandomPokemonService: Symbol.for('GetRandomPokemonService'),
  ListPokemonHandler: Symbol.for('ListPokemonHandler'),
  GetPokemonHandler: Symbol.for('GetPokemonHandler'),
  GetRandomPokemonHandler: Symbol.for('GetRandomPokemonHandler'),
  CreateBattleHandler: Symbol.for('CreateBattleHandler'),
  CreateBattleService: Symbol.for('CreateBattleService'),
};

export { TYPES };
