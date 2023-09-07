import { Router } from "express";
import { PlayerController } from "../controllers/PlayerController";

export const playerRoutes = Router()
const playerController =  new PlayerController()

const playerController = new PlayerController()

// get all players (findAllPlayers)
playerRoutes.get('/all', (req, res) => playerController.findAllPlayers(req, res))


// get player by id (findPlayer)
playerRoutes.get('/:id', () => '')


// post to register a new player in database (createPlayer) 
playerRoutes.post('/', playerController.createPlayer)


// put a new data to update a specific player by id (updatePlayer) 
playerRoutes.put('/:id', () => '')


// delete a specific player by id (deletePlayer) 
playerRoutes.delete('/:id', (req, res) => playerController.deletePlayer(req, res))