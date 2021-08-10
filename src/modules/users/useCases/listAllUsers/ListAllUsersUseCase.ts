import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// Recebendo os usuários da requisição
interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {} // Recebendo o repositório

  // Está chamando o método do repositório que retorna todos os usuários cadastrados e está retornando essa informação
  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user.admin || !user) {
      throw new Error("You are not admin!");
    }

    const usersPro = this.usersRepository.list();

    return usersPro;
  }
}

export { ListAllUsersUseCase };
