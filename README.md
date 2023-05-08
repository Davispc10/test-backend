# Pokemongo

Este é um projeto Node.js criado com Express, ele carrega os dados de uma planilha XLSX para uma base mongo e disponibiliza rotas para a consulta.

## Como rodar este projeto

1. Tenha o node instalado, essa aplicação foi construída na versão v18.16.0
2. Tenha o docker intalado, essa aplicação usa um banco de dados Mongo em container [install Docker](https://www.docker.com/products/docker-desktop/)
3. Clone este repositório para sua máquina local
```
 git clone https://github.com/aloiziobsc/PokemonGo.git
```
4. Navegue até o diretório do projeto e instale as dependências:
 ```
 cd PokemonGo
 npm install
```
5. Inicie o container para criar o banco e o Mongo Express com o comando:
 ```
docker-compose up -d
```
6. Inicie o servidor de desenvolvimento com o comando:
 ```
npm run dev
```
7. Agora o projeto já estará rodando e pronto para uso.
8. Abra seu navegador em http://localhost:8081/ para utilizar a interface do mongo Express.
9. Abra seu navegador em http://localhost:3000/api-docs/ para ver as rotas disponiveis no swagger.
10. Para encerrar o container use o comando:
 ```
docker-compose down
```


## Tecnologias utilizadas

- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

## Comandos disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `docker-compose up -d`: inicia o container docker
- `docker-compose down`: encerra o container docker

## Licença

Este projeto está licenciado sob a licença MIT.
