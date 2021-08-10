import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  // Banco de dados "fake"
  private users: User[];

  // Singleton Pattern, faz com que instância o repositório apenas um vez
  private static INSTANCE: UsersRepository;

  // Responsável por modelar os atributos
  private constructor() {
    this.users = [];
  }

  // Responsável por criar a instância usando o Singleton Pattern
  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  // A função creat está responsável por cadastrar a categoria no array
  create({ name, email }: ICreateUserDTO): User {
    const user = new User(); // Irá criar o usuário com os atributos passados

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    }); // O Object.assign envia os atributos para a "user"

    this.users.push(user); // Envia o usuário criado para o banco de dados
    return user;
  }

  // Irá buscar os usuários pelo "id"
  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  // Irá buscar os usuários pelo email
  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  // Deixará o usuário como "admin"
  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  // A função "list" irá retornar a lista de todos os usuários cadastrados na aplicação
  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
