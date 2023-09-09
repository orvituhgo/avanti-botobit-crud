import { Request, Response } from "express"
import { TournamentRepository } from "../database/TournamentRepository"
import { prismaClient } from "../database/prismaClient"

export class TournamentController {
  async createTournament (req : Request, res : Response) {
    try {
      const { name, start_date, end_date } = req.body
      console.log(name, start_date, end_date)
      
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
      const {id} = req.params
      const {name, start_date, end_date} = req.body

      const tournamentExist = await prismaClient.tournament.findFirst({where:{id}})
      if(!tournamentExist){
        return res.status(400).json("This tournament is not registered");
      }

      const tournamentUpdate = await prismaClient.tournament.update({
        where:{
          id
        },
        data : {
          name, 
          start_date,
          end_date
        }
      })

      return res.status(200).json(tournamentUpdate)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findTournament (req : Request, res : Response) {
    try {
      const {id} = req.params
      const tournament = await prismaClient.tournament.findFirst({
        where: {
          id
      }
    })
    if (!tournament) {
      return res.status(404).json({ err: 'Tournament not found!' });
    }
      return res.status(201).json(tournament)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllTournaments (req : Request, res : Response) {
    const tournaments = await new TournamentRepository().findAllTournamentsRepository()
    try {
      const tournaments = await prismaClient.tournament.findMany();
      
      return res.status(200).json(tournaments)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}