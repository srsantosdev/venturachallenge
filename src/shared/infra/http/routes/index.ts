import { Router } from 'express';
import actionsRouter from '@modules/actions/infra/http/routes/actions.routes';

const appRouter = Router();

appRouter.use('/actions', actionsRouter);

export default appRouter;
