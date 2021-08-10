import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params; // Recebendo o "id"

    try {
      const showUser = this.showUserProfileUseCase.execute({ user_id }); // Executando através do useCase

      return response.json(showUser); // Retornando o obejto do usuário encontrado
    } catch (err) {
      return response.status(404).json({ error: err }); // Capturando o erro e enviando através do json
    }
  }
}

export { ShowUserProfileController };
