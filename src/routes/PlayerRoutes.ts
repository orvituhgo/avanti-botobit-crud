import { Router } from "express";
import { PlayerController } from "../controllers/PlayerController";

export const playerRoutes = Router()
const playerController = new PlayerController()

// get all players (findAllPlayers)
playerRoutes.get('/all', () => '')


// get player by id (findPlayer)
playerRoutes.get('/:id', playerController.findPlayer)


// post to register a new player in database (createPlayer) 
playerRoutes.post('/:id', () => '')


// put a new data to update a specific player by id (updatePlayer) 
playerRoutes.put('/:id', () => '')


// delete a specific player by id (deletePlayer) 
playerRoutes.delete('/:id', () => '')
