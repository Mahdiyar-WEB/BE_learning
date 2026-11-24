//aggregation its like find query which have more commands to enhance our query
const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb_tutorial";

const client = new MongoClient(DB_URL); // to create an instance of mongoDB client

const main = async () => {
  await client.connect().then(() => console.log("db connected")); // to connect to db

  const db = client.db(DB_NAME); // create or use this db name

  const usersCollection = db.collection("users"); //create or use collection

  const result = await usersCollection
    .aggregate([
      {
        $match: {
          name: "mahdiyar4", // return all items which have name equal value
        },
      },
      {
        $project: {
          lastName: 0, // don't display lastName
        },
      },
      {
        $addFields: {
          userAge: "$birth", // add userAge field with birth value
        },
      },
    ])
    .toArray();

  console.log("🚀 ~ aggregation ~ result:", result);
};

main();
