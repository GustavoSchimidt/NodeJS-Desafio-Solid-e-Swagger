import { User } from "../model/User";

// DTO => Data transfer object, responsável por fazer a transferencia de uma class para outra.
interface ICreateUserDTO {
  name: string;
  email: string;
}

// É o "contrato" do respositório, ou seja, a implementação
interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
