import { app } from './app'

const port: number = parseInt(process.env.PORT || '3000')

const server = app.listen(
    port,
    () => {
        console.log(`HTTP Server runnning port:${port}!`)
    })

process.on('SIGINT', () => {
    server.close()
    console.log(`HTTP Server stop runnning!`)
})
