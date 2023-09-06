import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"

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
    try {
      //code to find all
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}