import { Router } from 'express';
import ActionsController from '../controllers/ActionsController';

const actionsRouter = Router();
const actionsController = new ActionsController();

actionsRouter.get('/', actionsController.index);
actionsRouter.post('/', actionsController.create);

export default actionsRouter;
