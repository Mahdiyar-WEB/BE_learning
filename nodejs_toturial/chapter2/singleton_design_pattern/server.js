const { MongoClient } = require("mongodb");

class ConnectToMongoDB {
  #mongoDB_URL = "mongodb://localhost:27017/mongodb_tutorial";
  #DB;

  async #connect() {
    try {
      const client = new MongoClient(this.#mongoDB_URL, () =>
        console.log("db connected"),
      );
      const db = client.db();
      return db;
    } catch (error) {
      console.log("🚀 ~ ConnectToMongoDB ~ connect ~ error:", error);
    }
  }

  async get() {
    try {
      if (this.#DB) {
        return this.#DB;
      }
      this.#DB = await this.#connect();
      return this.#DB;
    } catch (error) {
      console.log("🚀 ~ ConnectToMongoDB ~ get ~ error:", error);
    }
  }
}

const main = async () => {
  const db = await new ConnectToMongoDB().get();
  const users =  await db.collection("users").find({}).toArray();
  console.log("🚀 ~ main ~ users:", users);
};

main();
