import { Router } from "express";

export const tournamentRoutes = Router()

// get all tournaments (findAllTournaments)
tournamentRoutes.get('/all', () => '')


// get tournament by id (findTeam)
tournamentRoutes.get('/:id', () => '')


// post to register a new tournament in database (createTournaments)
tournamentRoutes.post('/', () => '')


// put a new data to update a specific tournament by id (updateTournaments) 
tournamentRoutes.put('/:id', () => '')


// delete a specific tournament by id (deleteTournaments) 
tournamentRoutes.delete('/:id', () => '')
