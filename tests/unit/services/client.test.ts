import "reflect-metadata";

import { ClientModel } from "../../../src/repositories/client";
import ClientService from "../../../src/services/client";

describe("ClientService.getClientById", () => {
  const clientId = 1;
  const mockedGetClientById = jest
    .fn()
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce({});
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

describe("ClientService.createClient", () => {
  const client: Omit<ClientModel, "id"> = {
    first_name: "Olivier",
    last_name: "Lardenois",
  };
  const mockedCreate = jest.fn().mockReturnValueOnce(client);
  const clientService = new ClientService({
    create: mockedCreate,
  } as any);

  afterAll(() => {
    mockedCreate.mockReset();
  });

  test("should create a client", () => {
    const createdClient = clientService.createClient(client);
    expect(createdClient).toEqual(client);
    expect(mockedCreate).toHaveBeenCalledWith(client);
  });
});
