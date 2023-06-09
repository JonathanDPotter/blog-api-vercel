"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const createServer_1 = __importDefault(require("./utils/createServer"));
const mongoConnect_1 = __importDefault(require("./utils/mongoConnect"));
const { port, baseURL } = config_1.default.server;
const server = (0, createServer_1.default)();
server.listen(port, () => {
    console.log(`Server is listening on ${baseURL}`);
    (0, mongoConnect_1.default)();
});
