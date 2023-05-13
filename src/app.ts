import express, { Application } from "express";
import cors from "cors";
///Application from routes
import userRoutes from "./app/mdules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

//parse data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/user', userRoutes);

export default app;