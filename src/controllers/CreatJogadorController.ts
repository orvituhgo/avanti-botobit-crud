import { Request, Response, response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateJogadorController {
  
  async findAllJogadores(request: Request, response: Response){
  console.log(prismaClient)
    const jogadores = await prismaClient.jogador.findMany({
      select:{
        id: true,
        name: true,
        idade: true
      }
    });
    return response.status(200).json(jogadores);
  }

// ------------------------------------------------------------------------------------


  async findOneJogador(request: Request, response: Response) {
    const { id } = request.params;

    const oneJogador = await prismaClient.jogador.findUnique({
      where:{
        id
      },
      select: {
        id: true,
        name: true,
        idade: true,
        time:{
          select:{
            name:true
          }
        }
      }
    });
    

    if (!oneJogador) {
      return response.status(400).json("This jogador is not registered");
  }

    return response.status(200).json(oneJogador);


  }
// ------------------------------------------------------------------------------------

  async handle(request: Request, response: Response) {

    try{
      const { name, idade, id_time } = request.body;
    console.log(name, idade,id_time)
    if(!id_time){
      return response.status(500).json({erro: "você deve criar primeiro um time antes de criar um jogador"})
    }

    const jogador = await prismaClient.jogador.create({
      data: {
        name : name,
        idade : idade,
        time: {
          connect: { id: id_time } 
        }
      },
    });

    return response.status(201).json(jogador);

    } catch (error) {
      console.log(error)
      return response.status(500).json({ error: 'An error occurred' });
    }
  } 

// ------------------------------------------------------------------------------------

async updateJogador(request: Request, response: Response) {

  const { id } = request.params
  const { name, idade } = request.body

  try{

    const jogadorExist = await prismaClient.jogador.findUnique({where:{ id }})
    if(!jogadorExist){
      return response.status(400).json("This jogador is not registered");
    }

    const jogador = await prismaClient.jogador.update({
      where: {
        id
      }, 
      data :{
        name,
        idade
      }, 
      select: {
        id: true,
        name: true,
        idade: true
      }
    })

    return response.status(200).json(jogador);

  }catch (error) {
    return response.status(400).json("Invalid data");
  }

}

// ------------------------------------------------------------------------------------

async deleteJogador(request: Request, response: Response) {
  const { id } = request.params;

  const userExist = await prismaClient.jogador.findUnique({ where: { id } });

  if (!userExist) {
      return response.status(400).json("This user is not registered");
  }

  const user = await prismaClient.jogador.delete({
      where: {
          id
      }
  });

  return response.status(204).send();
}


}
