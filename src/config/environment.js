const { PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.v15vsvo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = { PORT, DB_URI }
