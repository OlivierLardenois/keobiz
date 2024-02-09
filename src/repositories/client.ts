import { AbstractRepository } from "./abstractRepo";

export default class ClientRepo extends AbstractRepository {
  constructor() {
    super("clients");
  }
}

export interface ClientModel {
  id: number;
  first_name: string;
  last_name: string;
}
