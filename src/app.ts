import express, { Express } from 'express';
import {
  pokemonRouter,
  userRouter,
  authenticationRouter
} from "./routers/index";

import { connectDb, disconnectDB } from './database/client';
import { loadEnv } from './config/envs';

loadEnv();

const app = express();

app
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/users", userRouter)
  .use("/auth", authenticationRouter)
  .use("/pokemon", pokemonRouter)
;

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
