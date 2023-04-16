const app = require('./server');

const PORT = process.env.SERVER_PORT || 2510;
app.listen(PORT, () => console.log('Server running'));