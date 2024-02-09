import { AbstractRepository } from "./abstractRepo";

export default class ClientRepo extends AbstractRepository {
  constructor() {
    super("clients");
  }

  /** Fetch a client where is us the given one */
  getClientById(id: number) {
    return this.queryBuilder().where("id", id).first();
  }

  create(client: Omit<ClientModel, "id">) {
    return this.queryBuilder().insert(client, "*");
  }

  update(client: Partial<Omit<ClientModel, "id">>) {
    return this.queryBuilder().returning("*").update(client);
  }
}

export interface ClientModel {
  id: number;
  first_name: string;
  last_name: string;
}
