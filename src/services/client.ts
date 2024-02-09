import { container, injectable } from "tsyringe";

import BalanceSheetRepo from "../repositories/balance-sheet";
import ClientRepo, { ClientModel } from "../repositories/client";

@injectable()
class ClientService {
  constructor(
    private clientRepo: ClientRepo,
    private balanceSheetRepo: BalanceSheetRepo,
  ) {}

  /** Get a client by its id */
  getClientById(id: number) {
    return this.clientRepo.getClientById(id);
  }

  createClient(client: Omit<ClientModel, "id">) {
    return this.clientRepo.create(client);
  }

  updateClient(client: Partial<ClientModel>) {
    return this.clientRepo.update(client);
  }

  async deleteClient(id: number) {
    await this.balanceSheetRepo.deleteSheetsByClientId(id);
    return this.clientRepo.deleteById(id);
  }
}

container.register<ClientService>(ClientService, { useClass: ClientService });

export default ClientService;
