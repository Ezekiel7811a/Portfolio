require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
// Create a new MongoClient
const client = new MongoClient(process.env.MONGODB_URL);
async function run() {
  try {
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to mongo database");
  } catch (err) {
    console.log("Connection failed");
    console.log(err)
  }
}
run().catch(console.dir);

module.exports = client;
