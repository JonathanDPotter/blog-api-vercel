import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import indexRoutes from "../routes/index.routes";

const createServer = () => {
  const server = express();

  server.use(express.static(path.join(__dirname, "../static")));
  server.use(cors({ origin: "*" }));
  server.use(helmet());
  server.use(morgan("dev"));
  server.use(indexRoutes);

  return server;
};

export default createServer;
