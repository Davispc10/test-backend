import App from './app';

const app = new App().server;
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server started at port ${port}.`);
});
