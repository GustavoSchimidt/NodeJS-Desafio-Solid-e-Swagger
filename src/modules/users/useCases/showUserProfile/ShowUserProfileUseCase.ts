import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  // Está recebendo o id de um usuário, chamando o método do repositório que busca um usuário pelo id e está retornando o usuário encontrado.
  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}

export { ShowUserProfileUseCase };
