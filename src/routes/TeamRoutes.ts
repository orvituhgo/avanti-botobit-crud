import { Router } from "express";

export const teamRoutes = Router()

// get all teams (findAllTeams)
teamRoutes.get('/all', () => '')


// get team by id (findTeam)
teamRoutes.get('/:id', () => '')


// post to register a new team in database (createTeam)
teamRoutes.post('/', () => '')


// put a new data to update a specific team by id (updateTeam) 
teamRoutes.put('/:id', () => '')


// delete a specific team by id (deleteTeam) 
teamRoutes.delete('/:id', () => '')
