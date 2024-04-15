import mongoose from "mongoose";

const db_connection =
  process.env.DB_CONNECTION_STRING_AT_RUNTIME ||
  process.env.DB_CONNECTION_STRING_AT_BUILD ||
  "mongodb://mongo-user-not-defined:mongo-password-not-defined@mongo-server-not-defined/mongo-database-not-defined";

const connection = {};

const connect = async () => {
  try {
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
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const disconnect = async () => {
  if (connection.isConnnected) {
    await mongoose.disconnect();
    connection.isConnnected = false;
  }
};

const db = { connect, disconnect };
export default db;
