import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

const usersRepository = UsersRepository.getInstance();
const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);

export { turnUserAdminController };

// Aqui é feito todas as inicializações e é exportado para dentro da nossa rota.
