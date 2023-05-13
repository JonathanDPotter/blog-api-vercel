import config from "./config";
import createServer from "./utils/createServer";
import mongoConnect from "./utils/mongoConnect";

const { port, baseURL } = config.server;

const server = createServer();

server.listen(port, () => {
  console.log(`Server is listening on ${baseURL}`);
  mongoConnect();
});
