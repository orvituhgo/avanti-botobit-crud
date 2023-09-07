import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient";


export class TeamController {
  async createTeam (req : Request, res : Response) {
    try {
      const { name } = req.body

      if (name) {
        const team = await prismaClient.team.create({
          data: {
            name
          }
        })
        return res.status(201).json(team)
      } else {
        return res.status(400).json('Invalid data')
      }
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deleteTeam (req : Request, res : Response) {
    try {
      //code to delete
      return res.status(200).json()
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
    try {
      const teams = await prismaClient.team.findMany();

      return res.status(200).json(teams)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}