import "reflect-metadata";

import BalanceSheetService from "../../../src/services/balanceSheets";

describe("BalanceSheetService.getSheetsByClientId", () => {
  const clientId = 1;
  const mockedGetSheetsByClientId = jest.fn().mockReturnValueOnce([]);
  const balanceSheetService = new BalanceSheetService({
    getSheetsByClientId: mockedGetSheetsByClientId,
  } as any);

  afterAll(() => {
    mockedGetSheetsByClientId.mockReset();
  });

  test("should return a list of sheet for a given client", () => {
    const sheets = balanceSheetService.getSheetsByClientId(clientId);
    expect(sheets).toEqual([]);
    expect(mockedGetSheetsByClientId).toHaveBeenCalledWith(clientId);
  });
});
