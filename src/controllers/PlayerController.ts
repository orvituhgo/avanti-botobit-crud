import { Request, Response } from "express"

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
      //code to find
      return res.status(200).json()
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