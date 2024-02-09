export class Client {
  static isValidId(id: number): id is number {
    return id != undefined && !isNaN(Number(id));
  }
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  static isValidFirstName(firstName: any): firstName is string {
    return typeof firstName === "string";
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  static isValidLastName(lastName: any): lastName is string {
    return typeof lastName === "string";
  }
}
