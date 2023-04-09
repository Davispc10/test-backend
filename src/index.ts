import { App } from "./app";

new App().server.listen(3000, () => {console.log('Servidor rodando na porta 3000')});