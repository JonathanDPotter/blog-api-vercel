import config from "./config";
import createServer from "./utils/createServer";

const { port, baseURL } = config.server;

const server = createServer();

server.listen(port, () => {
  console.log(`Server is listening on ${baseURL}`);
});
