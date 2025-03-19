import { Router } from "express";
import userController from "../controllers/user.js";
import isAuthenticated from "../middleware/isAuth.js";


const appRouter = Router();

appRouter.post('/register', userController.register);
appRouter.post('/login', userController.login);
appRouter.get('/public',userController.publicRoute);
appRouter.get('/private',isAuthenticated,userController.privateRoute);

export default appRouter;