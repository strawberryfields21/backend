import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import HomeRoute from "./routes/HomeRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute,HomeRoute);
app.listen(3300, ()=>console.log("server up and running"))