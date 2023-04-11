# Poke-API

Projeto em Node.js com o objetivo de ler uma planilha com informações sobre Pokémons, listar essas informações e filtrá-las. O projeto utiliza os seguintes recursos:

##  Dependências
- Node.js
- Express.js
- TypeScript
- TypeORM
- Docker

##  Instalação
1. Clone o repositório:
```
git clone https://github.com/felipedv12/poke-api.git
```

2. Entre na pasta do projeto:
```
cd poke-api
```

3. Instale as dependências:
```
npm install
```

## Configuração do banco de dados
1. Execute o seguinte comando para criar o container Docker do banco de dados:

```
docker-compose up -d
```

2. Execute as migrations do TypeORM para criar as tabelas no banco de dados:
```
npm run typeorm migration:run -- -d ./src/data-source.ts
```

## Acessando a API

Acesse a API em http://localhost:3000/

### Rotas
- GET /: Rota base da API com informações sobre o projeto.
- GET /pokemon: Lista todos os registros. Os parâmetros query "page" e "perPage" podem ser utilizados para definir a paginação (por padrão, apenas 10 registros são mostrados).
- GET /pokemon/filter: Lista os registros com filtros. Os parâmetros query "name", "generation", "type1", "weather1", "stat_total", "legendary" e "is_shiny" podem ser utilizados para filtrar os resultados.
- POST /pokemon/read: Lê uma planilha com informações sobre Pokémon e as ingere no banco de dados. Retorna um objeto com as informações sobre possíveis falhas na validação dos dados.
