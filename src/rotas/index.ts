import { Router } from "express";
import { jogadorRouter } from "./jogadorRoutes";
import { timesRoutes } from "./timesRoutes"


const routes = Router();

routes.use('/api/v1/jogador', jogadorRouter);
routes.use('/api/v1/time', timesRoutes)

export { routes }