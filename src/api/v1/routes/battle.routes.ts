import { Router } from 'express';
import CreateBattleHandler from '../handlers/CreateBattleHandler';
import { container } from '../inversify.config';
import { TYPES } from '../types';

const battleRouter = Router();

const createBattleHandler = container.get<CreateBattleHandler>(TYPES.CreateBattleHandler);

battleRouter.post('/', createBattleHandler.handle.bind(createBattleHandler));

export default battleRouter;
