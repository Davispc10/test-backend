# Teste Dinheirow - Engenheiro de Software

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Desafio Pokémon Go!

Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.

Esta API deverá seguir o mínimo de práticas RESTful e conter listagens, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.

## Tecnologias Obrigatórias:
- NodeJS
- Algum banco de dados, por exemplo, MySQL, Postgres, etc...
- Git
- Express
- ORM

## Requisitos:
- Modelagem de dados
- Testes (Ex: Jest, etc.)
- Conceitos de API RESTful
- Alguma Arquitetura de Software (Ex: Arquitetura Limpa)
- Conceitos SOLID

## Diferencial
- Padrões de Projeto (Design Patterns)
- Docker
- Autenticação
- Alguma estratégia de cache

## Por onde começo?
Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

## Só isso?
Só! Mas se quiser fazer a diferença, tente implementar um pouco de testes, utilizar docker, algum ORM, autenticação de usuário, conceitos de segurança, padrões de pojeto e SOLID para execução do projeto.

Boa sorte! :)

## Para rodar a solução

Olá! Para conseguir rodar a solução que implementei é necessários seguir essas etapas. Primeiro deve-se criar o banco de dados que com o docker-compose, é só rodar o comando:
```
docker-compose up -d
```
Com o banco rodando é só iniciar o servidor em desenvolvimento com o comando:
```
npm run dev
```
Ele vai inicializar o servidor, salvando os dados do .csv caso não estejam salvos ainda e então as rotas estarão disponíveis!

As rotas são:
* Get pokemons ("GET/pokemon") - Rota para listar os pokemons cadastrados no banco. Aceita a página, trazendo 20 itens por página, e filtro por nome e geração do pokemon.
* Post pokemon ("POST/pokemon") - Informados os dados necessários cria um novo pokemon na pokedex.
* Post trainer ("POST/trainer") - Informados os dados necessário cria um novo treinador no banco de dados.
* Delete trainer ("DELETE/trainer/:id") - Deleta o treinador do banco de dados.
* Capture pokemon ("POST/trainer/capture") - Dado o id do treinador e do pokemon captura aquele pokemon para o treinador, com uma chance de ser shiny.
* Get trainer pokemons ("GET/trainer/:id/pokemons") - Lista os pokemons capturados de um treinador.


Para rodar os testes do caso de uso implementado, rodar o comando:
```
npm run test
```