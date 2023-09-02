import { Tournament } from "@prisma/client"
import { prismaClient } from "./prismaClient"

export class TournamentRepository{

    async findAllTournamentsRepository(): Promise<Tournament[]>{
        const tournaments = await prismaClient.tournament.findMany()

        return tournaments
    }

    async deleteTounamentById(id: string){
        await prismaClient.tournament.delete({
            where:{
                id
            }
        })
    }
}