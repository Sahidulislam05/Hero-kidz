const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export const collections = {
  PRODUCTS: "products",
  USERS: "users",
};

const { MongoClient, ServerApiVersion } = require("mongodb");

let client;
let db;

const initializeClient = async () => {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db(dbName);
  }
  return db;
};

export const dbConnect = async (cname) => {
  if (!cname) {
    throw new Error("Collection name is required");
  }
  const database = await initializeClient();
  return database.collection(cname);
};
