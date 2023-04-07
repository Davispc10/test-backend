<p align="center">
  <a href="https://github.com/lbcosta/test-backend">
    <img alt="Teste Dinheirow - Engenheiro de Software" height="90" src=".github/logo.svg">
  </a>
  <br>
</p>

<p align="center">
  <a href="#%EF%B8%8F-instalação">Instalação</a> •
  <a href="#%EF%B8%8F-inicialização">Inicialização</a> •
  <a href="#-seeding">Seeding</a> •
  <a href="#-documentação-da-api">Documentação da API</a>
</p>

# ⚙️ Instalação

**É necessário ter Node.js, Docker e Docker Compose instalados na sua máquina.**

Clone o projeto para sua máquina:

```bash
git clone https://github.com/lbcosta/test-backend
cd test-backend
```

Na raíz do projeto, instale as dependências:

```bash
npm install
```

Suba o container do banco de dados:

```bash
docker-compose up --build -d
```

Execute as migrations:

```
npm run migrate
```

# 🌱 Seeding

Para popular o banco de dados que foi inicializado, basta rodar o seguinte script:

```bash
./seed.sh
```

# ⚡️ Inicialização

Para inicializar a aplicação localmente, basta usar o comando:

```bash
npm start
```

# 📃 Documentação da API

## 🔗 Endpoints

**BaseURL: http://localhost:3000/api/v1**

### 🔍 Listagem de Pokémon

**URL**: `/pokemon[?generation=X][&type=Y][&weather=Z][&legendary=W]` <br>
**Method**: GET <br>
**Parâmetros**: `generation` - Número da geração de Pokémon (opcional) | `type` - Tipo de Pokémon (opcional) | `weather` - Clima (opcional) | `legendary` - 0 para não-lendário e 1 para lendário (opcional) <br>
**Request Body**: _Sem request_ <br>
**Response**: Objeto JSON contendo metadados sobre a busca e os dados buscados<br>

Exemplo de **Response**:

<img src="https://img.shields.io/badge/Status-200-green">

```json
{
  "count": 822,
  "next": "http://localhost:3000/api/v1/pokemon?page=2",
  "previous": "",
  "page": 1,
  "perPage": 20,
  "pages": 42,
  "data": [
    {
      "id": 1,
      "name": "Bulbasaur",
      "pokedex_number": 1,
      "img_name": "1",
      "generation": 1,
      "evolution_stage": "1",
      "evolved": "0",
      "familyId": 1,
      "cross_Gen": false,
      "type_one": "grass",
      "type_two": "poison",
      "weather_one": "Sunny/clear",
      "weather_two": "Cloudy",
      "stat_total": 326,
      "atk": 118,
      "def": 118,
      "sta": 90,
      "legendary": 0,
      "aquireable": 1,
      "spawns": true,
      "regional": 0,
      "raidable": 0,
      "hatchable": 5,
      "shiny": false,
      "nest": true,
      "new": false,
      "not_gettable": false,
      "future_evolve": false,
      "cp40": 981,
      "cp39": 967
    }
    // ...
  ]
}
```

Exemplos de possíveis **Erros**:

<img src="https://img.shields.io/badge/Status-404-red">

```json
{
  "status": "error",
  "message": "No pokemon found with the given parameters"
}
```

### 🔍 Buscar Pokémon por ID ou Nome

**URL**: `/pokemon/:idOrName` <br>
**Method**: GET <br>
**Parâmetros**: `idOrName` - ID ou nome do Pokémon<br>
**Request Body**: _Sem request_ <br>
**Response**: Objeto JSON contendo os dados do Pokémon<br>

Exemplo de **Response**:

<img src="https://img.shields.io/badge/Status-200-green">

```json
{
  "id": 1,
  "name": "Bulbasaur",
  "pokedex_number": 1,
  "img_name": "1",
  "generation": 1,
  "evolution_stage": "1",
  "evolved": "0",
  "familyId": 1,
  "cross_Gen": false,
  "type_one": "grass",
  "type_two": "poison",
  "weather_one": "Sunny/clear",
  "weather_two": "Cloudy",
  "stat_total": 326,
  "atk": 118,
  "def": 118,
  "sta": 90,
  "legendary": 0,
  "aquireable": 1,
  "spawns": true,
  "regional": 0,
  "raidable": 0,
  "hatchable": 5,
  "shiny": false,
  "nest": true,
  "new": false,
  "not_gettable": false,
  "future_evolve": false,
  "cp40": 981,
  "cp39": 967
}
```

Exemplos de possíveis **Erros**:

<img src="https://img.shields.io/badge/Status-404-red">

```json
{
  "status": "error",
  "message": "Could not find pokemon with id 999"
}
```

### 🎲 Pokémon Aleatório

**URL**: `/pokemon/random` <br>
**Method**: GET <br>
**Request Body**: _Sem request_ <br>
**Response**: Objeto JSON contendo os dados do Pokémon aleatório<br>

Exemplo de **Response**:

<img src="https://img.shields.io/badge/Status-200-green">

```json
{
  "id": 718,
  "name": "Tyrantrum",
  "pokedex_number": 697,
  "img_name": "697",
  "generation": 6,
  "evolution_stage": "Lower",
  "evolved": "0",
  "familyId": null,
  "cross_Gen": false,
  "type_one": "rock",
  "type_two": "dragon",
  "weather_one": "Partly cloudy",
  "weather_two": "Windy",
  "stat_total": 612,
  "atk": 227,
  "def": 221,
  "sta": 164,
  "legendary": 0,
  "aquireable": 0,
  "spawns": false,
  "regional": 0,
  "raidable": 0,
  "hatchable": 0,
  "shiny": false,
  "nest": false,
  "new": false,
  "not_gettable": false,
  "future_evolve": false,
  "cp40": 3106,
  "cp39": 3062
}
```

### ⚔️ Criar Batalha entre dois Pokémon

**URL**: `/battle` <br>
**Method**: POST <br>
**Request Body**: Objeto JSON contendo os IDs ou nomes de dois Pokémon<br>
**Response**: Objeto JSON contendo informações sobre a batalha e o vencedor<br>

Exemplo de **Request Body**:

```json
{
  "pokemon1": "caterpie",
  "pokemon2": "charizard"
}
```

Exemplo de **Response**:

<img src="https://img.shields.io/badge/Status-200-green">

```json
{
  "contestant1": "Caterpie [bug | Not Evolved | Not Legendary]",
  "contestant2": "Charizard [fire / flying | Evolved | Not Legendary]",
  "battle": "Pokémon Battle: Caterpie vs Charizard!",
  "result": "Charizard wins the battle!"
}
```

Exemplos de possíveis **Erros**:

<img src="https://img.shields.io/badge/Status-404-red">

```json
{
  "status": "error",
  "message": "Could not find pokemon with name Charizardo"
}
```
