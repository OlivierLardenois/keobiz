import "reflect-metadata";

import ClientService from "../../../src/services/client";

const mockedGetClientById = jest
  .fn()
  .mockReturnValueOnce(undefined)
  .mockReturnValueOnce({});

describe("ClientService.getClientById", () => {
  const clientId = 1;
  const clientService = new ClientService({
    getClientById: mockedGetClientById,
  } as any);

  afterAll(() => {
    mockedGetClientById.mockReset();
  });

  test("should return undefined if no client", () => {
    const client = clientService.getClientById(clientId);
    expect(client).toBe(undefined);
    expect(mockedGetClientById).toHaveBeenCalledWith(clientId);
  });
  test("should return a client", () => {
    const client = clientService.getClientById(clientId);
    expect(client).toEqual({});
    expect(mockedGetClientById).toHaveBeenCalledWith(clientId);
  });
});
