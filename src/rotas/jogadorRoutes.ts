import { Router } from "express";
import { CreateJogadorController } from '../controllers/CreatJogadorController';

const jogadorRouter = Router();


const jogador = new CreateJogadorController();
jogadorRouter.get('/', jogador.findAllJogadores);
jogadorRouter.get('/:id', jogador.findOneJogador);
jogadorRouter.post('/', jogador.handle);
jogadorRouter.put('/:id', jogador.updateJogador);
jogadorRouter.delete('/:id', jogador.deleteJogador);

export { jogadorRouter };