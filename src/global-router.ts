import { Router } from 'express';
import authRouter from './auth/auth-router';
import eventRouter from './events/event-router';
import parseRouter from './parse/parse-router';
// other routers can be imported here

const globalRouter = Router();


globalRouter.use(authRouter);
globalRouter.use(parseRouter)
globalRouter.use(eventRouter);


// other routers can be added here

export default globalRouter;
