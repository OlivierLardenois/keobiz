import { AbstractRepository } from "./abstractRepo";

export default class ClientRepo extends AbstractRepository {
  constructor() {
    super("clients");
  }

  /** Fetch a client where is us the given one */
  getClientById(id: number) {
    return this.queryBuilder().where("id", id).first();
  }
}

export interface ClientModel {
  id: number;
  first_name: string;
  last_name: string;
}
