import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

// Create
usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

// Update
usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

// List
usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

// List all users
usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
