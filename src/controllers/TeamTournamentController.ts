import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient";


/*


PRECISA DESSE CONTROLLER SERÁ?



*/

export class TeamTournamentController {
  async createTeamTournament (req : Request, res : Response) {
    try {
      const {id_team, id_tournament} = req.body
      console.log(id_team, id_tournament)

      if (id_team && id_tournament) {
        const teamTournament = await prismaClient.teamTournament.create({
          data: {
            id_team,
            id_tournament
          }
        })
        return res.status(201).json(teamTournament)
      } else {
        return res.status(400).json('Invalid data')
      }
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deleteTeamTournament (req : Request, res : Response) {
    try {
      const {id} = req.params
      const teamTournamentExist = await prismaClient.teamTournament.findFirst({where:{id}})

      if(!teamTournamentExist){
        return res.status(400).json("This Team Tournament is not registered or has already been deleted");
      }

      const deleteTeamTournament = await prismaClient.teamTournament.delete({
        where:{
          id
        }
      })

      return res.status(200).json(" Relacionamento apagado ")
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async updateTeamTournament (req : Request, res : Response) {
    try {
      
      const {id} = req.params
      const {id_team, id_tournament} = req.body

      const teamTournamentExist = await prismaClient.teamTournament.findFirst({where:{id}})

      if(!teamTournamentExist){
        return res.status(400).json("This TeamTournament is not registered");
      }

      const teamTournamentUpdate = await prismaClient.teamTournament.update({
        where:{
          id
        },
        data:{
          id_team,
          id_tournament
        }
      })

      return res.status(200).json(teamTournamentUpdate)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findTeamTournament (req : Request, res : Response) {
    try {
      const {id} = req.params
      console.log(id)
      const teamTournament = await prismaClient.teamTournament.findFirst({
        where: {
          id
      }
    })
    if (!teamTournament) {
      return res.status(404).json({ err: 'Team Tournament not found!' });
    }
      return res.status(200).json(teamTournament)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }


  // esse metodo serve para encontrar  todos os times de um campeonato
  async findTeamsInTournament (req : Request, res : Response) {
    try {
      const {id} = req.params
      const teamsInTournament = await prismaClient.teamTournament.findMany({
        where: {
          id_tournament: id,
        },
        include: {
          team: true,
        },
      });
       return res.status(200).json(teamsInTournament)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

    // esse metodo serve para encontrar  todos os campeonatos em que um time está 
  async findTournamentsForTeam (req : Request, res : Response) {
    try {
      const {id} = req.params
      const tournamentsForTeam = await prismaClient.teamTournament.findMany({
        where: {
          id_team: id,
        },
        include: {
          tournament: true,
        },
      });
      return res.status(200).json(tournamentsForTeam)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllTeamsTournaments (req : Request, res : Response) {
    try {
      const teamTournaments = await prismaClient.teamTournament.findMany();
      return res.status(200).json(teamTournaments)
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}