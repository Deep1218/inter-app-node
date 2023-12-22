import express from "express";
import dontenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dontenv.config();
const app = express();
const port = process.env.PORT;
const dbUrl: string = process.env.DB_URL as string;

const client = new MongoClient(dbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
client
  .connect()
  .then(() => console.log("Database connected"))
  .catch(console.error)
  .finally(() => client.close());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
