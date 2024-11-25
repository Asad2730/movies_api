import cors from "cors";
import express, { type Express } from "express";
import router from "../routes/route";


const app: Express = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api',router)

export default app ;