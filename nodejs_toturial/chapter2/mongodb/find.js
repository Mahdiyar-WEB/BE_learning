const { MongoClient } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb_tutorial";

const client = new MongoClient(DB_URL); // to create an instance of mongoDB client

const main = async () => {
  await client.connect().then(() => console.log("db connected")); // to connect to db

  const db = client.db(DB_NAME); // create or use this db name

  const usersCollection = db.collection("users"); //create or use collection

  usersCollection
    // .find({skills:'Node.js'}) // return all users which have Node.js in their skills
    // .find({ birth: { $gte: new Date("01-01-2003") } }) // $gte: great than equal we also can use $gt
    .find({ birth: { $lte: new Date("01-01-2004") } }) // $lte: less than equal we also can use $lt
    .toArray()
    .then((res) => console.log(res));
};

main();
