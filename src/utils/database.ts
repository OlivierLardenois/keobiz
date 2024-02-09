import knex, { Knex } from "knex";

class Database {
  private client?: Knex;

  public connect() {
    try {
      this.client = knex({
        client: "mysql2",
        connection: {
          host: "127.0.0.1",
          port: 3306,
          user: "root",
          password: process.env.MYSQL_ROOT_PASSWORD,
          database: process.env.MYSQL_DB_NAME,
        },
      });
      console.log("Connection to database successful");
    } catch (err) {
      console.error("Connection to database failed", {
        action: "Database#connect",
      });
    }
  }

  public getClient() {
    if (!this.client) {
      console.error("No db client found");
      throw new Error("NO_DB_CONNECTION");
    } else return this.client;
  }
}

export default new Database();
