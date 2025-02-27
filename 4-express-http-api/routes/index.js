import express from "express";
import controllers from "../controllers/index.js";

const appRouter = express.Router();

// Static Route
appRouter.get('/',controllers.home);

// Dynamic Route
// routes parameters
appRouter.get('/users/:username',controllers.users)

// Query Parameters
appRouter.get('/search',controllers.search);

//not found route
appRouter.get('*',controllers.notFound);

export default appRouter;