import dotenv from "dotenv";

dotenv.config();

const { PORT, HOST, NODE_ENV } = process.env;

const server = {
  port: PORT,
  host: HOST,
  baseURL: `http${NODE_ENV === "development" ? "" : "s"}://${HOST}:${PORT}`,
}

export default { server };