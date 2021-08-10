import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params; // Recebendo o usuario

    try {
      const userAdmin = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      }); // Executando o useCase para tornar o user como admind

      return response.json(userAdmin);
    } catch (err) {
      return response.status(404).json({ error: err }); // Capturando o erro e enviando através do json
    }
  }
}

export { TurnUserAdminController };
