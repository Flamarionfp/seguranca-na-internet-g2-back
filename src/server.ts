import express from "express";
import router from "./routes";
import cors from "cors";
import morgan from "morgan";
import env, { isProduction } from "@env";
import errorHandlerMiddleware from "./middlewares/error";
import verifyApiKey from "./middlewares/verify-api-key";

const app = express();
app.use(morgan(isProduction ? "short" : "dev"));
app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(express.json());
app.use(verifyApiKey.handle);
app.use(router);
app.use(errorHandlerMiddleware.handle);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
