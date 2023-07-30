const expressApp = require('./config/express');

const PORT = process.env.PORT || 3000;

expressApp.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
