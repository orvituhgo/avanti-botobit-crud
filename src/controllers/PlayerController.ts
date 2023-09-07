import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient";


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
      return res.status(200).json()
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
    try {
      const players = await prismaClient.player.findMany();

      return res.status(200).json(players)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}