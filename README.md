# introducao-ao-SOLID

# 💻 Objetivo do desafio

Criar uma aplicação de listagem e cadastro de usuários utilizando os conceitos de SOLID aprendidos. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin.

## Rotas da aplicação

- POST `/users`;

- PATCH `/users/:user_id/admin`;

- GET `/users/:user_id`;

- GET `/users`;

## Específicação dos testes

### Teste do model

- **Should be able to create an user with all props**

### Testes do repositório

- **Should be able to create new users**

- **Should be able to list all users**

- **Should be able to find user by ID**

- **Should be able to find user by e-mail address**

- **Should be able to turn an user as admin**

### Testes de useCases

- **Should be able to create new users**

- **Should not be able to create new users when email is already taken**

- **Should be able to turn an user as admin**

- **Should not be able to turn a non existing user as admin**

- **Should be able to get user profile by ID**

- **Should not be able to show profile of a non existing user**

- **Should be able to list all users**

- **Should not be able to a non admin user get list of all users**

- **Should not be able to a non existing user get list of all users**

