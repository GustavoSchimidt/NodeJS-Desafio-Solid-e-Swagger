import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers; // Recebendo o "id"

    try {
      const userList = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      }); // Irá executar a listagem dos usuários no useCase

      return response.json(userList); // Retornará a listagem dos usuários
    } catch (err) {
      return response.status(400).json({ error: err }); // Capturando o erro e enviando através do json
    }
  }
}

export { ListAllUsersController };
