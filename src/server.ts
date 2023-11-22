import express from "express";
import router from "./routes";
import cors from "cors";
import morgan from "morgan";
import env, { isProduction } from "@env";
import errorHandlerMiddleware from "./middlewares/error";

const app = express();
app.use(morgan(isProduction ? "short" : "dev"));
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlerMiddleware.handle);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
