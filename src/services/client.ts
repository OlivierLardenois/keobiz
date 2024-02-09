import { container, injectable } from "tsyringe";

import ClientRepo, { ClientModel } from "../repositories/client";

@injectable()
class ClientService {
  constructor(private clientRepo: ClientRepo) {}

  /** Get a client by its id */
  getClientById(id: number) {
    return this.clientRepo.getClientById(id);
  }

  createClient(client: Omit<ClientModel, "id">) {
    return this.clientRepo.create(client);
  }
}

container.register<ClientService>(ClientService, { useClass: ClientService });

export default ClientService;
