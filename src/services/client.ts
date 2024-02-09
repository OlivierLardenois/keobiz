import { container, injectable } from "tsyringe";

import ClientRepo from "../repositories/client";

@injectable()
class ClientService {
  constructor(private clientRepo: ClientRepo) {}

  /** Get a client by its id */
  getClientById(id: number) {
    return this.clientRepo.getClientById(id);
  }
}

container.register<ClientService>(ClientService, { useClass: ClientService });

export default ClientService;
