import { Router } from "express";
import { CreateTimesController } from "../controllers/CreatTimesController";



const timesRoutes = Router();
const timesController = new CreateTimesController()

timesRoutes.get('/', timesController.findAllTimes);
timesRoutes.get('/:id', timesController.findOneTime)
timesRoutes.post('/', timesController.handle);
timesRoutes.put('/:id', timesController.updeteTime)
timesRoutes.delete('/:id', timesController.deleteTime)

export { timesRoutes }