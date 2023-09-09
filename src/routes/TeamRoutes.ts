import { Router } from "express";
import { TeamController } from "../controllers/TeamController";

export const teamRoutes = Router()
const teamController = new TeamController()


// get all teams (findAllTeams)
teamRoutes.get('/all', (req, res) => teamController.findAllTeams(req, res))


// get team by id (findTeam)
teamRoutes.get('/:id', teamController.findTeam)


// post to register a new team in database (createTeam)
teamRoutes.post('/', teamController.createTeam)


// put a new data to update a specific team by id (updateTeam) 
teamRoutes.put('/:id', teamController.updateTeam )


// delete a specific team by id (deleteTeam) 
teamRoutes.delete('/:id', (req, res) => teamController.deleteTeam(req, res))
