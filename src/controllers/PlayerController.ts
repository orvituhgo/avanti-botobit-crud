import { Request, Response } from "express"
import { PlayerRepository } from "../database/PlayerRepository"
import { prismaClient } from "../database/prismaClient"


export class PlayerController {
  async createPlayer (req : Request, res : Response) {
    try {
      const { name, age, id_team } = req.body

      if(name && age && id_team) {
        const player = await prismaClient.player.create({
          data: {
            name,
            age,
            id_team
          }
        })
        return res.status(201).json(player)
      } else {
        return res.status(400).json("Invalid data")
      }
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
      const { id } = req.params
      const { name, age, id_team } = req.body

      const playerExist = await prismaClient.player.findFirst({where : {id}})

      if(!playerExist){
        return res.status(400).json("This jogador is not registered");
      }

      const playerUpdate = await prismaClient.player.update(
        {
          where:{
            id
          },
          data: {
            name,
            age,
            id_team
          }
        }
      )


      return res.status(200).json(playerUpdate)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findPlayer (req : Request, res : Response) {
    try {
      const {id} = req.params
      const player = await prismaClient.player.findFirst({
        where: {
          id
      },      
    })    
    if (!player) {
      return res.status(404).json({ err: 'Player not found!' });
    }
      return res.status(200).json(player)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllPlayers (req : Request, res : Response) {
    const playerRepository = new PlayerRepository() 
    const players = await playerRepository.findAllPlayersRepository()

    try {
      const players = await prismaClient.player.findMany();

      return res.status(200).json(players)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}