import { Router } from "express";

export const playerRoutes = Router()

// get all players (findAllPlayers)
playerRoutes.get('/all', () => '')


// get player by id (findPlayer)
playerRoutes.get('/:id', () => '')


// post to register a new player in database (createPlayer) 
playerRoutes.post('/', () => '')


// put a new data to update a specific player by id (updatePlayer) 
playerRoutes.put('/:id', () => '')


// delete a specific player by id (deletePlayer) 
playerRoutes.delete('/:id', () => '')
