import { Router } from "express";
import { TournamentController } from "../controllers/TournamentController";

export const tournamentRoutes = Router()

const tournaments = new TournamentController()

// get all tournaments (findAllTournaments)
tournamentRoutes.get('/all', (req, res) => tournaments.findAllTournaments(req, res))


// get tournament by id (findTeam)
tournamentRoutes.get('/:id', () => '')


// post to register a new tournament in database (createTournaments)
tournamentRoutes.post('/', tournaments.createTournament)


// put a new data to update a specific tournament by id (updateTournaments) 
tournamentRoutes.put('/:id', () => '')


// delete a specific tournament by id (deleteTournaments) 
tournamentRoutes.delete('/:id', (req, res) => tournaments.deleteTournament(req, res))
