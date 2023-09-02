import { Request, Response } from "express"
import { TeamRepository } from "../database/TeamRepository"

export class TeamController {
  async createTeam (req : Request, res : Response) {
    try {
      //code to create
      return res.status(201).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deleteTeam (req : Request, res : Response) {
    try {
      //code to delete
      await new TeamRepository().deleteTeamById(req.params.id)
      
      return res.status(200).json("Team Deletado!")
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async updateTeam (req : Request, res : Response) {
    try {
      //code to update
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findTeam (req : Request, res : Response) {
    try {
      //code to find
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllTeams (req : Request, res : Response) {
    const teamRepository = new TeamRepository()
    const teams = await teamRepository.findAllTeamsRepository()
    try {
      //code to find all


      return res.status(200).json(teams)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}