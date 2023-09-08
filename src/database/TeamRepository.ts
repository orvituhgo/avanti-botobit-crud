import { Team } from "@prisma/client"
import { prismaClient } from "./prismaClient"

export class TeamRepository{

    async findAllTeamsRepository(): Promise<Team[]>{
        const teams = await prismaClient.team.findMany()

        return teams
    }

    async deleteTeamById(id: string){
        await prismaClient.team.delete({
            where:{
                id
            }
        })
    }
}