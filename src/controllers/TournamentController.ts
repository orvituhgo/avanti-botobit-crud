import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class TournamentController {
  async createTournament (req : Request, res : Response) {
    try {
      //code to create
      return res.status(201).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async deleteTournament (req : Request, res : Response) {
    try {
      //code to delete
      return res.status(200).json()
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
      const {id} = req.params
      const tournament = await prismaClient.tournament.findFirst({
        where: {
          id
      }
    })
    if (!tournament) {
      return res.status(404).json({ err: 'Tournament not found!' });
    }
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }

  async findAllTournaments (req : Request, res : Response) {
    try {
      //code to find all
      return res.status(200).json()
    } catch (err) {
      return res.status(500).json({error: `An error ocurred: ${err}`})
    }
  }
}