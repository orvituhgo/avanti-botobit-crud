import { Request, Response } from "express"
import { TournamentRepository } from "../database/TournamentRepository"
import { prismaClient } from "../database/prismaClient"

export class TournamentController {
  async createTournament (req : Request, res : Response) {
    try {
      const { name, start_date, end_date } = req.body
      
      if (name && start_date && end_date) {
        const tournament = await prismaClient.tournament.create({
          data: {
            name, 
            start_date,
            end_date
          }
        })
        return res.status(201).json(tournament)
      } else {
        return res.status(400).json('Invalid data')
      }
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deleteTournament (req : Request, res : Response) {
    try {
      //code to delete
      await new TournamentRepository().deleteTounamentById(req.params.id)
      
      return res.status(200).json("Tournament Deletado!")
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async updateTournament (req : Request, res : Response) {
    try {
      //code to update
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findTournament (req : Request, res : Response) {
    try {
      //code to find
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllTournaments (req : Request, res : Response) {
    const tournaments = await new TournamentRepository().findAllTournamentsRepository()
    try {
      //code to find all
      return res.status(200).json(tournaments)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}