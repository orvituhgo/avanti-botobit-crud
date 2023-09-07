import { Router } from "express";
import { TeamController } from "../controllers/TeamController";

export const teamRoutes = Router()

const teamController = new TeamController()

// get all teams (findAllTeams)
teamRoutes.get('/all', () => '')


// get team by id (findTeam)
teamRoutes.get('/:id', () => '')


// post to register a new team in database (createTeam)
teamRoutes.post('/', teamController.createTeam)


// put a new data to update a specific team by id (updateTeam) 
teamRoutes.put('/:id', () => '')


// delete a specific team by id (deleteTeam) 
teamRoutes.delete('/:id', () => '')
