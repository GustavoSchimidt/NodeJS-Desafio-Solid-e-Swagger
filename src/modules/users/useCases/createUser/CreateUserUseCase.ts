import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// Irá receber o "name" e o "email" da requisição
interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {} // Recebendo o repositório

  // Criando o usuário através do método create do repositório e retornando o usuário criado
  execute({ email, name }: IRequest): User {
    const userAreadyExists = this.usersRepository.findByEmail(email);
    if (userAreadyExists) {
      throw new Error("User aready exists");
    }

    const userCreate = this.usersRepository.create({ email, name });

    return userCreate;
  }
}

export { CreateUserUseCase };
