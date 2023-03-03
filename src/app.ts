import "express-async-errors";
import express, { Application } from "express";
import { errorHandler } from "./error";
import loginRoutes from "./routes/user/login.routes";
import userRoutes from "./routes/user/user.routes";
import categoryRoutes from "./routes/category/category.routes";
import realEstatesRoutes from "./routes/realEstate/realEstate.routes";
import scheduleRoutes from "./routes/schedule/schedule.routes";


const app: Application = express();
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes)
app.use("/realEstate", realEstatesRoutes)
app.use("/schedules", scheduleRoutes)

app.use(errorHandler);

export default app;
