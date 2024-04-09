import mongoose from "mongoose";

const db_connection =
  // "mongodb://mongo:eFEm1E0V6Ovr0ZKoi1px@localhost:27017/go?authSource=admin";
  process.env.DB_CONNECTION_STRING_AT_RUNTIME ||
  process.env.DB_CONNECTION_STRING_AT_BUILD ||
  "mongodb://mongo-user-not-defined:mongo-password-not-defined@mongo-server-not-defined/mongo-database-not-defined";

const connection = {};

async function connect() {
  if (connection.isConnnected) {
    console.log("db connected");
    return;
  }
  if (mongoose.connections.length === 0) {
    connection.isConnnected = mongoose.connection[0].readyState;
    if (connection.isConnnected === 1) {
      return;
    }

    await mongoose.disconnect();
  }
  const db = await mongoose.connect(db_connection);
  connection.isConnnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnnected) {
    await mongoose.disconnect();
    connection.isConnnected = false;
  }
}

const db = { connect, disconnect };
export default db;
