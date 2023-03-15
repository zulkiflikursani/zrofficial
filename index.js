import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(
    "Server up and running...." + "http://localhost:" + process.env.APP_PORT
  );
});
