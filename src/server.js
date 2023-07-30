const expressApp = require('./config/express');

const SERVER_PORT = process.env.SERVER_PORT || 3000;


expressApp.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
