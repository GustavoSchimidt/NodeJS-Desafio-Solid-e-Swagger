import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

const usersRepository = UsersRepository.getInstance();
const showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
const showUserProfileController = new ShowUserProfileController(
  showUserProfileUseCase
);

export { showUserProfileController };

// Aqui é feito todas as inicializações e é exportado para dentro da nossa rota.
