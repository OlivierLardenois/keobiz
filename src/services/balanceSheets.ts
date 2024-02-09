import { container, injectable } from "tsyringe";
import BalanceSheetRepo from "../repositories/balance-sheet";

@injectable()
class BalanceSheetService {
  constructor(private balanceSheetRepo: BalanceSheetRepo) {}

  /** Get all balance sheet by for a clientId */
  // @TODO: Pagination
  getSheetsByClientId(id: number) {
    return this.balanceSheetRepo.getSheetsByClientId(id);
  }
}

container.register<BalanceSheetService>(BalanceSheetService, {
  useClass: BalanceSheetService,
});

export default BalanceSheetService;
