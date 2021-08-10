import { v4 as uuidV4 } from "uuid";

// Aqui é a estrutura de atributos
class User {
  id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  // O constructor está criando os "id" e deixando os usuários como "padrão"
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
