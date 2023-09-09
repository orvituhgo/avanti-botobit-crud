import { Router } from "express";
import { playerRoutes } from "./PlayerRoutes";
import { teamRoutes } from "./TeamRoutes";
import { tournamentRoutes } from "./TournamentRoutes";
import { teamTournamentRoutes } from "./TeamTournamentRoutes";

export const routes = Router()

routes.use("/api/v1/player", playerRoutes)
routes.use("/api/v1/team", teamRoutes)
routes.use("/api/v1/tournament", tournamentRoutes)
routes.use("/api/v1/teamtournament", teamTournamentRoutes)
