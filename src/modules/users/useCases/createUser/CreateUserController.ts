import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body; // Recebendo os atributos "name" e o "email"

    try {
      const user = this.createUserUseCase.execute({ name, email }); // Irá executar a criação do usuário no "useCase"
      return response.status(201).json(user); // Irá retornar o user criado
    } catch (err) {
      return response.status(400).json({ error: err }); // Capturando o erro e enviando através do json
    }
  }
}

export { CreateUserController };
