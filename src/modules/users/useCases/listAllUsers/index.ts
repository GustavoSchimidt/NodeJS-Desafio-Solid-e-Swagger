import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };

// Aqui é feito todas as inicializações e é exportado para dentro da nossa rota.
