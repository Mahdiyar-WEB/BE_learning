const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb_tutorial";

const client = new MongoClient(DB_URL); // to create an instance of mongoDB client

const main = async () => {
  await client.connect().then(() => console.log("db connected")); // to connect to db

  const db = client.db(DB_NAME); // create or use this db name

  const usersCollection = db.collection("users"); //create or use collection

  //   const result = await usersCollection.findOne(
  //     {
  //       _id: new ObjectId("6b03b185e38fb40c594f56b7"),
  //     },
  //     // {
  //     //   projection: {
  //     //     birth: 0, // don't include in result
  //     //     skills: 0, // don't include in result
  //     //   },
  //     // },
  //     {
  //       projection: {
  //         name: 1, // display just name in result
  //       },
  //     },
  //   );

  //   const result = await usersCollection
  //     .find(
  //       {},
  //       {
  //         skip: 1, // skip items
  //         limit: 2, // just return 2 items in result
  //       },
  //     )
  //     .toArray();

  const result = await usersCollection
    .find(
      {},
      {
        // sort: { _id: -1 }, // -1: display the newest documents which inserted in collection to oldest
        // sort: { _id: 1 }, // 1: display the oldest documents which inserted in collection to newest
        sort: { birth: 1 }, // 1: display littles to greater
      },
    )
    .toArray();

  console.log("🚀 ~ main ~ result:", result); // it will the deleted document
};

main();
