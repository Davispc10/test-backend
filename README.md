# Pokemon Go API

Essa aplicação foi desenvolvida para consumir os dados de um arquivo .xlsx (Excel) e disponibilizá-los através de endpoints de listagem. Esses endpoints oferecem recursos de busca, ordenação e filtragem para facilitar a visualização dos dados contidos no arquivo.

## Tecnologias utilizadas

- Node.js + Express - API

- JWT + bcrypt - Autenticação

- PostgreSQL + PrismaORM - Banco de dados

- Jest + Supertest - Testes

- Docker + docker-compose - Conteinerização


## Instalação

Depois de clonar esse repositório, vá ao diretório principal do projeto, e execute o seguinte comando:

```bash
docker compose up --build
```

Este comando tem a finalidade de iniciar um container do PostgreSQL, executar as migrações necessárias e, em seguida, executar o seed inicial que importará automaticamente todos os dados do arquivo .xlsx.

A aplicação estará disponível no seguinte endereço:

```url
http://localhost:4000
```

## Utilização

### POST /users - Criar usuário

Para começar a utilizar a aplicação, é necessário criar um usuário. Para fazer isso, envie uma requisição POST para o seguinte endereço:

```url
http://localhost:4000/users
```
Com o body da requisição no formato: 

```json
{
  "email": "exemplo@exemplo.com", //string @unique
  "username": "exempl0",         //string @unique
  "password": "top_secret"      //string
}
```
A rota retorna então:

```json
{
  "id": 1,                         //int
  "email": "exemplo@exemplo.com", //string
  "username": "exempl0"          //string  
}
```

### POST /auth/sign-in - Iniciar sessão

Com o usuário criado, é possível iniciar uma sessão. Para isso, envie uma requisição POST para:

```url
http://localhost:4000/auth/sign-in
```
Com o body da requisição contendo email e senha utilizados na criação do usuário: 

```json
{
  "email": "exemplo@exemplo.com", //string
  "password": "top_secret"       //string
}
```
A rota retorna:

```json
{
  "user": {
    "id": 1,                                          //int
    "email": "exemplo@exemplo.com",                  //string
    "username": "exempl0",                          //string
    "createdAt": "2023-08-05T00:12:06.949Z",       //string
    "updatedAt": "2023-08-05T00:12:06.949Z"       //string
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       
  eyJ1c2VySWQiOjM1LCJpYXQiOjE2OTExOTQ1MjJ9.
  7crR4dF3E8mz9DAhjTnu69lNyUVmx7-FM7v5G-SE3go"   //string
}
```

A partir daqui, todas as rotas exigirão um cabeçalho (Header) Authorization, com o valor "Bearer " + token. Então é importante guardar o valor de token ao iniciar a sessão.

Exemplo cabeçalho:

```json
Authorization "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       
                eyJ1c2VySWQiOjM1LCJpYXQiOjE2OTExOTQ1MjJ9.
                7crR4dF3E8mz9DAhjTnu69lNyUVmx7-FM7v5G-SE3go"
```

### DELETE /auth/log-out - Encerrar sessão

##### Exige cabeçalho Authorization "Bearer " + token

Essa rota encerra uma sessão, invalidando o token referente.

Para isso, envie uma requisição DELETE para o endereço:

```url
http://localhost:4000/auth/log-out
```

O retorno será:

```json
OK
```

## Rotas GET /pokemon

A aplicação conta com cinco rotas autenticadas para consumo de dados, e elas são:

```json
- /pokemon

- /pokemon/:id

- /pokemon/sortBy/:sorter

- /pokemon/pokedex/:pokedexNumber

- /pokemon/search/:keyword
```

### GET /pokemon - Buscar pokemons com ordenação da Pokedex
##### Exige cabeçalho Authorization "Bearer " + token

Ao enviar uma requisição GET  para o  endereço:

```url
http://localhost:4000/pokemon
```

Irá retornar:

```json
[
  {
    "name": "Bulbasaur",
    "pokedexNumber": 1,  //pokedexNumber 1
    "type1": "grass",
    "type2": "poison",
    "statTotal": 326,
    "atk": 118,
    "def": 118,
    "sta": 90,
    "weather1": "Sunny/clear",
    "weather2": "Cloudy",
    "hatchable": 5,
    "generation": 1,
    "evolutionStage": "1",
    "legendary": false,
    "shiny": false,
    "id": 9
  },
  {
    "name": "Ivysaur",
    "pokedexNumber": 2,  //pokedexNumber 2
    "type1": "grass",
    "type2": "poison",
    "statTotal": 422,
    "atk": 151,
    "def": 151,
    "sta": 120,
    ...
  },
  ... +18]
  ```

A busca é ordenada de acordo com o valor *pokedexNumber*, e em ordem crescente por padrão (menor => maior). 

Além disso, a rota aceita os seguintes parâmetros:

```json
- ?page=1           //int default=0

- ?pageSize=10       //int default=20

- ?direction="desc"  //string default='asc' - crescente('asc') ou decrescente('desc')

- ?type="fire"       //string default=''
```

Exemplo de requisição usando todos parâmetros:

```url
http://localhost:4000/pokemon?page=1&pageSize=5&direction=desc&type=fire
```
Ou seja, pedir pela segunda página (page=1), contendo 5 itens (pageSize=5), em ordem decrescente do valor *pokedexNumber* (direction=desc), e selecionando pokemons de tipo fogo (type=fire).

Retorno: 
```json
[
  {
    "name": "Torracat",
    "pokedexNumber": 726,  
    "type1": "fire",
    "type2": "",
    "statTotal": 407,
    "atk": 174,
    "def": 103,
    "sta": 130,                  
    ...
  },
  {
    "name": "Litten",
    "pokedexNumber": 725,  
    "type1": "fire",
    "type2": "",
    "statTotal": 297,
    "atk": 128,
    "def": 79,
    "sta": 90,
    ...
  },
  ... +3]
```

### GET /pokemon/:id - Buscar pokemon por id

##### Exige cabeçalho Authorization "Bearer " + token

Essa busca retorna um único pokemon de acordo com o parâmetro *id*, que indica o id do pokemon no banco de dados.

Ao enviar uma requisição GET para o  endereço:

```url
http://localhost:4000/pokemon/11
```

O retorno será:

```json
{
  "name": "Charizard",
  "pokedexNumber": 6,
  "type1": "fire",
  "type2": "flying",
  "statTotal": 555,
  "atk": 223,
  "def": 176,
  "sta": 156,
  "weather1": "Sunny/clear",
  "weather2": "Windy",
  "hatchable": 0,
  "generation": 1,
  "evolutionStage": "3",
  "legendary": false,
  "shiny": false,
  "id": 11              //id
}
```

### GET /pokemon/sortBy/:sorter - Buscar pokemons com ordenação especial

##### Exige cabeçalho Authorization "Bearer " + token

Essa rota possui o parâmetro *sorter*, que define a referência para ordenação da busca. Esse parâmetro aceita os seguintes valores:

```json
- pokedexNumber 

- sta          //valor de stamina do pokemon

- atk          //valor de ataque do pokemon

- def          //valor de defesa do pokemon

- statTotal    //atk + def + sta
```

Ou seja, ao enviar uma requisição para o endereço:

```url
http://localhost:4000/pokemon/sortBy/atk
```
Ou seja, ordenando de acordo com o valor de 'atk'.

Retorno:

```json
[
  {
    "name": "Deoxys Attack",
    "pokedexNumber": 386,
    "type1": "psychic",
    "type2": "",
    "statTotal": 560,
    "atk": 414,     //maior ataque
    "def": 46,
    "sta": 100,
    ...
  },
  {
    "name": "Kartana",
    "pokedexNumber": 798,
    "type1": "grass",
    "type2": "steel",
    "statTotal": 726,
    "atk": 355,     //segundo maior ataque
    "def": 253,
    "sta": 118,
    ...
  }
  ...+18]
  ```

Nessa rota, a busca é ordenada em ordem decrescente por padrão (maior => menor). 

A rota também aceita os parâmetros:

```json
- ?page=1           //int default=0

- ?pageSize=10       //int default=20

- ?direction="desc"  //string default='desc' - crescente('asc') ou decrescente('desc')

- ?type="fire"       //string default=''
```

Exemplo de requisição usando parâmetros:

```url
http://localhost:4000/pokemon/sortBy/def?page=0&pageSize=3&direction=asc&type=dragon
```
Ou seja, pedir pela primeira página (page=0), contendo 3 itens (pageSize=3), em ordem crescente (direction=asc) do valor *def*, e selecionando pokemons tipo dragão (type=dragon). Em suma, é uma busca pelos 3 pokemons de tipo dragão com menor valor de defesa.

Retorno: 
```json
[
  {
    "name": "Noibat",
    "pokedexNumber": 714,
    "type1": "flying",
    "type2": "dragon",
    "statTotal": 239,
    "atk": 83,
    "def": 76,
    "sta": 80,
    ...
  },
  {
    "name": "Gible",
    "pokedexNumber": 443,
    "type1": "dragon",
    "type2": "ground",
    "statTotal": 324,
    "atk": 124,
    "def": 84,
    "sta": 116,
    ...
  },
  ...+1]
```

### GET /pokemon/pokedex/:pokedexNumber - Buscar pokemon por pokedexNumber

##### Exige cabeçalho Authorization "Bearer " + token

Essa busca recebe o parâmetro *pokedexNumber*, e retorna todos os registros de pokemons com o valor indicado nesse atributo.

Para testar envie uma requisição GET para o endereço:

```url
http://localhost:4000/pokemon/pokedex/151
```

O retorno será:

```json
[
  {
    "name": "Mew",
    "pokedexNumber": 151,
    "type1": "psychic",
    "type2": "",
    "statTotal": 620,
    "atk": 210,
    "def": 210,
    "sta": 200,
    ...
  }
]
```

Existem diferentes registros de pokemons que possuem o mesmo *pokedexNumber*.

Por exemplo a requisição GET para:

```url
http://localhost:4000/pokemon/pokedex/386
```

Retorna:

```json
[
  {
    "name": "Deoxys Attack",
    "pokedexNumber": 386,
    "type1": "psychic",
    "type2": "",
    "statTotal": 560,
    "atk": 414,
    "def": 46,
    "sta": 100,
    ...
  },
  {
    "name": "Deoxys Normal",
    "pokedexNumber": 386,
    "type1": "psychic",
    "type2": "",
    "statTotal": 560,
    "atk": 345,
    "def": 115,
    "sta": 100,
    ...
  }
  ...+2]
```

### GET /pokemon/search/:keyword - Busca de texto por nome 

##### Exige cabeçalho Authorization "Bearer " + token

Essa busca recebe o parâmetro *keyword*, e retorna todos os registros de pokemons onde o atributo *name* possui o valor de *keyword*.

Ou seja, enviando uma requisição GET para o endereço:

```url
http://localhost:4000/pokemon/search/saur
```

O retorno será:

```json
[
  {
    "name": "Bulbasaur",
    "pokedexNumber": 1,
    ...
  },
  {
    "name": "Ivysaur",
    "pokedexNumber": 2,
    ...
  },
  {
    "name": "Venusaur",
    "pokedexNumber": 3,
    ...
  }
]
```

## Testes

Para executar os testes automatizados, execute o seguinte comando na raiz do projeto:

```bash
npm run test
```

## Observação

Não é usual que os arquivos `.env` estejam presentes no repositório do GitHub, contudo, devido a natureza avaliativa desse projeto, decidi colocá-los aqui, a fim de facilitar a instalação e execução.

Ademais, estou disponível para esclarecer qualquer particularidade do projeto.
