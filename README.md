# Teste Backend Pokemon GO!

Este README passa uma visão geral sobre o projeto, decisões técnicas, tecnologias e uma breve documentação das rotas e seus parâmetros.

## Tecnologias

- Sequelize

- Docker e Docker compose

- Postgres

- ESlinter

- Prettier

- Jest

- NodeJS V16

- Express

Arquitetura: Princípios da clean architecture

## Installation

Na raiz do projeto, rode o seguinte comando:

```bash
docker compose up --build
```

Esse comando irá subir uma container do Postgres, rodar as migrations necessárias e posterioermente rodar o seed inicial que irá importar todos os Pokemons de forma automatizada.

Em seguida a aplicação estará ouvindo no seguinte DNS:

```bash
http://localhost:3000
```

## Usage

A aplicação possui duas rotas. Uma para listagem com filtros e outra para busca por ID. Veja os exemplos abaixo:

```nodejs

GET /Pokemons
Filtros:

page           - type: number | required | example: 1
pageSize       - type: number | required | example: 5
evolutionStage - type: string | not required | example: Evolved
evolved:       - type: boolean | not required | example: true
shiny:         - type: boolean | not required | example: true
type1:         - type: string | not required | example: grass
type2:         - type: string | not required | example: poison
weather1:      - type: string | not required | example: Cloudy
weather2:      - type: string | not required | example: Rainy

Exemplos:
http://localhost:3000/pokemons?page=1&pageSize=5
http://localhost:3000/pokemons?page=1&pageSize=5&shiny=true&evolved=true
http://localhost:3000/pokemons?page=1&pageSize=5&type1=grass&weather1=Cloudy
```

```nodejs

GET /Pokemons/{pokemonId}
Parâmetros:

pokemonId - type: number | required | example: 1

Exemplos:
http://localhost:3000/pokemons/1
http://localhost:3000/pokemons/2
http://localhost:3000/pokemons/3

```

## Teste Suite

Para rodar a suite de testes, execute o seguinte comando na raiz do projeto:

```
npm run test
```

Output:

```
 PASS  src/app/useCases/PokemonUseCases.test.js
  ListPokemon use case test suite
    findAll
      ✓ should retrieve pokemons from database (4 ms)
    findById
      ✓ should retrieve pokemons from database (1 ms)

 PASS  src/app/repository/pokemonRepository.test.js
  pokemonRepository test suite
    findAll
      ✓ should retrieve a list of pokemons from database (3 ms)
      ✓ should retrieve a list of pokemons from database with filter (1 ms)
    findById
      ✓ should retrieve pokemon by ID (1 ms)

 PASS  src/app/controllers/pokemonController.test.js
  PokemonController test suite
    getAll
      ✓ should return 400 bad request if page param is not provided (4 ms)
      ✓ should return 400 bad request if pageSize param is not provided (2 ms)
      ✓ should return 400 bad request if page param is invalid (1 ms)
      ✓ should return 400 bad request if page param is invalid (1 ms)
      ✓ should return 400 bad request if page param is smaller than 1 (1 ms)
      ✓ should return 400 bad request if page param is smaller than 1 (1 ms)
      ✓ should return 400 bad request if a non permited query param is provided (1 ms)
      ✓ should return 200 with payload (1 ms)
    getByPokemonId
      ✓ should return 400 bad request if pokemonId param is not provided (1 ms)
      ✓ should return 400 bad request if pokemonId param is invalid (1 ms)
      ✓ should return 200 with payload (1 ms)

 PASS  src/utils/pokemonParser.test.js
  pokemonParser function tests
    ✓ should return null if object was invalid (1 ms)

Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.886 s, estimated 1 s
Ran all test suites.
```

## Considerações finais

O arquivo `.env` foi commitado apenas para facilitar o review do teste. Em um cenário de produção isso seria omitido.

Estarei a disposição com qualquer dúvida sobre o projeto ou possíveis dificuldades em rodá-lo.
