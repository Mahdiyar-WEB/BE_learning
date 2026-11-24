const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb_tutorial";

const client = new MongoClient(DB_URL); // to create an instance of mongoDB client

const main = async () => {
  await client.connect().then(() => console.log("db connected")); // to connect to db

  const db = client.db(DB_NAME); // create or use this db name

  const usersCollection = db.collection("users"); //create or use collection

  const result = await usersCollection.updateOne(
    { _id: new ObjectId("6b03b185e38fb40c594f56b7") }, // find the document
    { $set: { lastName: "marvi nasaj" } }, // update the document with $set
    // { $unset: { lastName: 1 } }, // remove one property from document
    // { $push: { skills: "BE" } }, // add item to skills array
    // { $pull: { skills: "BE" } }, // remove item from skills array
    // { $inc: { age: 1 } }, // increase item number
    // { $inc: { age: -1 } }, // decrease item number
    // { $rename: { age: "userAge" } }, // rename document property name
  );

  console.log("🚀 ~ main ~ result:", result); //  acknowledged: true, modifiedCount: 1, upsertedId: null, upsertedCount: 0, matchedCount: 1
};

main();
