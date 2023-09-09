import { Router } from "express";
import { TeamTournamentController } from "../controllers/TeamTournamentController";

export const teamTournamentRoutes = Router()
const teamTournament = new TeamTournamentController()

// get all tournaments (findAllTournaments)
teamTournamentRoutes.get('/all', (req, res) => teamTournament.findAllTeamsTournaments(req, res))


// // get tournament by id (findTeam)
teamTournamentRoutes.get('/:id', teamTournament.findTeamTournament)

// rota para ver todos os times de um campeonato
teamTournamentRoutes.get('/tournament/:id', teamTournament.findTeamsInTournament)

// rota para ver todos os campeonatos em que um time está 
teamTournamentRoutes.get('/team/:id', teamTournament.findTournamentsForTeam)


// // post to register a new tournament in database (createTournaments)
teamTournamentRoutes.post('/', teamTournament.createTeamTournament)


// // put a new data to update a specific tournament by id (updateTournaments) 
teamTournamentRoutes.put('/:id', teamTournament.updateTeamTournament)


// // delete a specific tournament by id (deleteTournaments) 
teamTournamentRoutes.delete('/:id', teamTournament.deleteTeamTournament)
