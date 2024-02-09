import express from "express";
import { container } from "tsyringe";

import ClientService from "../services/client";
import { Client } from "../utils/client";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const clientId = Number(req.params.id);
  if (!Client.isValidId(clientId)) {
    res.json({});
    return next();
  }
  const client = await container
    .resolve(ClientService)
    .getClientById(Number(clientId));
  res.json(client);
  return next();
});

router.post("/create", async (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!Client.isValidFirstName(firstName)) {
    console.warn("Invalid firstName");
    return next();
  }
  if (!Client.isValidFirstName(lastName)) {
    console.warn("Invalid lastName");
    return next();
  }

  const client = await container
    .resolve(ClientService)
    .createClient({ first_name: firstName, last_name: lastName });

  res.json(client);
  return next();
});

router.put("/update", async (req, res, next) => {
  const clientId = Number(req.body.id);
  const { firstName, lastName } = req.body;

  if (!Client.isValidId(clientId)) {
    console.warn("Invalid id");
    return next();
  }
  if (firstName != undefined && !Client.isValidFirstName(firstName)) {
    console.warn("Invalid firstName");
    return next();
  }
  if (lastName != undefined && !Client.isValidFirstName(lastName)) {
    console.warn("Invalid lastName");
    return next();
  }

  const client = await container
    .resolve(ClientService)
    .updateClient({ id: clientId, first_name: firstName, last_name: lastName });

  res.json(client);
  return next();
});

router.delete("/:id", async (req, res, next) => {
  const clientId = Number(req.params.id);

  if (!Client.isValidId(clientId)) {
    console.warn("Invalid id");
    return next();
  }

  await container.resolve(ClientService).deleteClient(clientId);

  res.send("Client deleted");
  return next();
});

export default router;
