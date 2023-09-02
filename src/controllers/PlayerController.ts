import { Request, Response } from "express"
import { PlayerRepository } from "../database/PlayerRepository"

export class PlayerController {
  async createPlayer (req : Request, res : Response) {
    try {
      //code to create
      return res.status(201).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deletePlayer (req : Request, res : Response) {
    try {
      //code to delete
      await new PlayerRepository().deletePlayerById(req.params.id)


      return res.status(200).json("Player Deletado!")
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async updatePlayer (req : Request, res : Response) {
    try {
      //code to update
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findPlayer (req : Request, res : Response) {
    try {
      //code to find
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllPlayers (req : Request, res : Response) {
    const playerRepository = new PlayerRepository() 
    const players = await playerRepository.findAllPlayersRepository()

    try {
      //code to find all
      return res.status(200).json(players)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}