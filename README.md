# Teste Dinheirow - Engenheiro de Software - Mateus Aguiar

# Metodologia

Inicialmente foi feita uma análise exploratória da base de dados fornecida.  Uma vez que existem muitos dados inconsistentes ou faltantes,
e nenhuma informação sobre como deve ser o tratamento desse tipo de dado, essa base de dados foi importada para um banco de dados postegreSQL, no qual todos dados foram considerados 'strings', à excessão do campo 'id', que foi preenchido automaticamente com valores inteiros únicos. A aplicação foi desencolvida de maneira a possibilitar uma adequação prática caso mais informações sobre o tratamento da base de dados forem fornecidas.
A API foi desenvolvida levando em consideração os conceitos RESTful, contando com rotas que utilizam as requisições http mais comuns (GET, POST, PUT, DELETE), aplicando validação aos dados da requisição e paginação quando necessário. Para o gerenciamento relacional da aplicação com o banco de dados, foi utilizado o framework Sequelize, aplicando os conceitos de migrations e seeders.

# Como Utilizar

Após clonar o repositório e instalar as dependencias do projeto, é necessário inicializar o banco de dados e populá-lo com os dados presentes no arquivo .xlsx fornecido. Primeiramente crie as variáveis de ambiente para o seu banco de dados, seguindo o padrão mostrado no arquivo .env.example. Para criar a tabela com as características necessárias, utilize o comando:

```
npm run db:migrate
```

Caso seja necessário desfazer essa migration, utilize:

```
npm run db:migrate:undo
```

Em seguida, será necessário popular o banco de dados a partir do arquivo .xlsx. Para tanto, utilize o comando:

```
npm run db:populate
```

Para iniciar o servidor utilize:

```
npm run dev
```

# Requisições e Endpoints

## Informações [GET /]

Retorna um objeto no formato JSON com informações sobre a base de dados.

## Listar todos os registros [GET /pokemons{?size,page}]

Retorna os registros do banco de dados com paginação.

## Criar um novo registro [POST /pokemons]

Adiciona um novo registro ao banco de dados.

## Retornar um registro [GET /pokemons/id]

Retorna o registro correspondente ao id passado como parâmetro.

## Editar um registro [PUT /pokemons/id]

Modifica o registro correspondente ao id passado como parâmetro.

## Remover um registro [DELETE /pokemons/id]

Remove o registro correspondente ao id passado como parâmetro.


