"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, HOSTNAME, NODE_ENV, MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_COLLECTION, SERVER_TOKEN_EXPIRETIME, SERVER_TOKEN_ISSUER, SERVER_TOKEN_SECRET, } = process.env;
const server = {
    hostname: HOSTNAME,
    port: PORT,
    env: NODE_ENV,
    baseURL: NODE_ENV === "development"
        ? `http://${HOSTNAME}:${PORT}/`
        : `https://${HOSTNAME}:${PORT}/`,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret: SERVER_TOKEN_SECRET || "secret",
    },
};
const mongo = {
    user: MONGO_USER,
    password: MONGO_PASSWORD,
    host: MONGO_HOST,
    collection: MONGO_COLLECTION,
    url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_COLLECTION}`,
    options: { retryWrites: true },
};
const config = { server, mongo };
exports.default = config;
