const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb_tutorial";

const client = new MongoClient(DB_URL); // to create an instance of mongoDB client

const main = async () => {
  await client.connect().then(() => console.log("db connected")); // to connect to db

  const db = client.db(DB_NAME); // create or use this db name

  const usersCollection = db.collection("users"); //create or use collection

  // const result = await usersCollection.deleteMany({
  //   "address.province": "tehran",
  // });

  const result = await usersCollection.deleteMany({
    name: "mahdiyar2",
  });

  console.log("🚀 ~ main ~ result:", result); // it will return deleteCounts and acknowledged=true

  usersCollection.countDocuments().then((count) => console.log(count));
};

main();
