import { AbstractRepository } from "./abstractRepo";

export default class BalanceSheetRepo extends AbstractRepository {
  constructor() {
    super("balance_sheets");
  }
}

export interface BalanceSheetModel {
  year: number;
  client_id: number;
  result: number;
}
