import express from "express";
import appRouter from "./routes/index.js"
import middlewares from "./middlewares/index.js";

const PORT = 3000;
const app = express();

// use is a method that is used to allow the use of middleware to request handling chain
// nak letak in between router and appRouter.
// eg: "/api"
// later search ${res.statusCode}
app.use('/',middlewares.logger, appRouter);

app.listen(PORT,() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

