import db from "../utils/database";

export abstract class AbstractRepository {
  constructor(protected tableName: string) {}

  public queryBuilder() {
    return db.getClient()(this.tableName);
  }
}
