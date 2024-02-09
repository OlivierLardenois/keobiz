import { AbstractRepository } from "./abstractRepo";

export default class BalanceSheetRepo extends AbstractRepository {
  constructor() {
    super("balance_sheets");
  }

  getSheetsByClientId(clientId: number) {
    return this.queryBuilder().where("client_id", clientId);
  }

  deleteSheetsByClientId(clientId: number) {
    return this.queryBuilder().where("client_id", clientId).del();
  }
}

export interface BalanceSheetModel {
  year: number;
  client_id: number;
  result: number;
}
