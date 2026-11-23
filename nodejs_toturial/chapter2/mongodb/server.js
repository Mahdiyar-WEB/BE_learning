const { MongoClient } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb_tutorial";

const client = new MongoClient(DB_URL); // to create an instance of mongoDB client

const main = async () => {
  await client.connect().then(() => console.log("db connected")); // to connect to db

  const db = client.db(DB_NAME); // create or use this db name

  const usersCollection = db.collection("users"); //create or use collection

  // const result = await usersCollection.insertOne({
  //   name: "mahdiyar",
  //   lastName: "marvi",
  //   skills: ["Next.js", "React.js", "Node.js", "typescript"],
  //   birth: new Date("08-22-2003"),
  //   address: {
  //     province: "Khorasan Razavi",
  //     street: "mashhad",
  //   },
  // });

  // console.log("🚀 ~ main ~ result:", result); // it will return mongoDB objectId and acknowledged=true

  usersCollection
    .find({})
    .toArray()
    .then((res) => console.log(res));
};

main();
