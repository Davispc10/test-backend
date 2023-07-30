class PokemonUseCases {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findAll(filters) {
    const { page, pageSize, ...searchFilters } = filters;

    const offset = page * pageSize - pageSize;
    const limit = pageSize;

    return this.userRepository.findAll(limit, offset, searchFilters);
  }

  async findById(pokemonId) {
    return this.userRepository.findById(pokemonId);
  }
}

module.exports = PokemonUseCases;
