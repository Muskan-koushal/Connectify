import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import CardRouter from "./routes/card.route.js";
import businessRouter from "./routes/business.route.js";
import teacherRouter from "./routes/teacher.route.js";
import datingRouter from "./routes/dating.route.js";
import UserRouter from "./routes/user.route.js"
import eventRouter from "./routes/event.route.js";
import appointmentRouter from "./routes/appoinment.route.js";
import SharecardRouter from "./routes/shareCard.route.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));
app.use("/user",UserRouter);
app.use("/mycard",CardRouter);
app.use("/business",businessRouter);
app.use("/dating",datingRouter);
app.use("/event",eventRouter);
app.use("/teacher",teacherRouter);
app.use("/appointment",appointmentRouter);
app.use("/sharecard",SharecardRouter)
export { app };