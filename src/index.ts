import { Server } from "./server"
import { AppDataSource } from "./database/data-source"

AppDataSource.initialize().then(async () => {}).catch(error => console.log(error))

new Server().server.listen(3000, () => {console.log('Servidor rodando na porta 3000')});