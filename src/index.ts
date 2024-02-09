import "reflect-metadata";

import express from "express";

import database from "./utils/database";
import client from "./resolvers/client";

database.connect();

const app = express();
app.use(express.json());

app.use("/client", client);

app.listen(process.env.APP_PORT, () => {
  console.log(`listening on port ${process.env.APP_PORT}`);
});
