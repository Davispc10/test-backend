# Teste Dinheirow - Engenheiro de Software

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Desafio Pokémon Go!

Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.

Esta API deverá seguir o mínimo de práticas RESTful e conter listagens, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.

## Tecnologias

- Conceitos de API RESTful
- Modelagem de dados
- NodeJS
- Algum banco de dados, por exemplo, MySQL, SQL Server, MongoDB, etc...
- Git

## Por onde começo?
Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

## Só isso?
Só! Mas se quiser fazer a diferença, tente implementar um pouco de testes, utilizar docker, algum ORM, autenticação de usuário e conceitos de segurança e padrões SOLID para execução do projeto.

Boa sorte! :)


## End-points
 - /findAll: recebe por query a paginação e alguns filtros sendo todos eles opcionais. Retorna os pokemons filtrados e limitados (limit default = 15).
    - filtros permitidos: type1, type2, generation, hatchable, spawns, legendary, evolve, shiny e new
 - /find/search?name={{name}}&id={{id}}: busca um pokemon por nome ou por id.

Para rodar, execute: ```docker-compose up --build```
