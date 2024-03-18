// import mongoose from "mongoose";

// const { DB_HOST } = process.env;

// const connect = async () => {
//   try {
//     await mongoose.connect(DB_HOST, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     throw new Error("Error connecting to MongoDB:", error.message);
//   }
// };
// export default connect;

import mongoose from "mongoose";

const { DB_HOST } = process.env;

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
  const db = await mongoose.connect(DB_HOST);
  connection.isConnnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnnected) {
    if (DB_HOST === "production") {
      await mongoose.disconnect();
      connection.isConnnected = false;
    }
  }
}
const db = { connect, disconnect };
export default db;

// TS

// import mongoose from "mongoose";

// interface IConnectOptions {
//   useNewUrlParser: boolean;
//   useUnifiedTopology: boolean;
// }

// const { DB_HOST } = process.env;

// const connect = async (): Promise<void> => {
//   try {
//     if (!DB_HOST) {
//       throw new Error("DB_HOST environment variable is not defined");
//     }

//     const options: IConnectOptions = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     await mongoose.connect(DB_HOST, options);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     throw error;
//   }
// };

// export default connect;
