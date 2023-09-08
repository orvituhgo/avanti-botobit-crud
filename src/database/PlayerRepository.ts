import { Player } from "@prisma/client";
import { prismaClient } from "./prismaClient";


export class PlayerRepository{

    async findAllPlayersRepository(): Promise<Player[]>{
        const players = await prismaClient.player.findMany()

        return players
    }

    async deletePlayerById(id: string){
        await prismaClient.player.delete({
            where:{
                id
            }
        })
    }





}