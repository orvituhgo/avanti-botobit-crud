import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";



export class CreateTimesController {
    async findAllTimes (req: Request, res: Response ) {
        const allTimes = await prismaClient.time.findMany({
            select:{
                name : true
            }
        })
        return res.status(200).json(allTimes);
    }

    // ------------------------------------------------------------------------------------

    async findOneTime (req: Request, res: Response ) {
        const { id } = req.params
        const oneTime = await prismaClient.time.findUnique({
            where:{
                id
            }, select:{
                name : true,
                fundacao: true,
                Jogador:{
                    select:{
                        name: true
                    }
                }
            }
        })
        if (!oneTime) {
            return res.status(400).json("This jogador is not registered");
        }
        return res.status(200).json(oneTime);
    }

    // ------------------------------------------------------------------------------------

    async handle (req: Request, res: Response ) {
        try {
            
            const { name, fundacao } = req.body
            console.log(name, fundacao, req.body )

            const postTime = await prismaClient.time.create({
                data:{
                    name,
                    fundacao
                }
            })
            return res.status(201).json(postTime)

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ocorreu um erro ao criar o time.' });
        }
    }


// ------------------------------------------------------------------------------------



async updeteTime (req: Request, res: Response ) {
    const {id} = req.params
    const {name, fundacao} = req.body
    console.log(id, name, fundacao)
    const timeExist = await prismaClient.time.findUnique({where:{ id }})
    if(!timeExist){
      return res.status(400).json(`This time ${name} is not registered`);
    }
    const time = await prismaClient.time.update({
        where: {
          id
        }, 
        data : {
          name,
          fundacao
        }, 
        select: {
          id: true,
          name: true,
          fundacao: true
        }
      })
  
      return res.status(200).json(time);
}



    // ------------------------------------------------------------------------------------


    async deleteTime (req: Request, res: Response ) {
        const {id} = req.params
        const time = await prismaClient.time.delete({
            where:{
                id
            }
        })
        return res.status(204).send();
    }

}