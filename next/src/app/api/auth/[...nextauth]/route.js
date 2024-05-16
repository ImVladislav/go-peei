// import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
// import db from "../../../../../libs/db";
// import User from "../../../../../models/UserModel";
// import bcrypt from "bcrypt";
// import { NextResponse } from "next/server";
import { authOptions } from "./authOptions";
// async function login(credentials) {
//   try {
//     await db.connect();
//     const user = await User.findOne({ email: credentials.email });
//     if (!user) throw new Error("No user found with this email");
//     const isCorrect = await bcrypt.compare(credentials.password, user.password);
//     if (!isCorrect) throw new Error("Password doesn't match");
//     return user;
//   } catch (error) {
//     console.log("Error while logging in:", error);
//   }

// const exists = await User.findOne({
//   $or: [{ email: email }, { username: username }],
// });
// if (exists) {
//   return NextResponse.json(
//     { message: "User or email already exists" },
//     { status: 400 }
//   );
// }
// }
// export const authOptions = {
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           console.log({ credentials });
//           console.log("this is user=", user);
//           return user;
//         } catch (error) {
//           throw new Error("Failed to login");
//         }
//         // const user = await User.findOne({ email: credentials?.email });
//         // if (!user) {
//         //   throw new Error("No such user found!");
//         // }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.username = user.username;
//       }
//       console.log("token=", token);
//       return token;
//     },
//     async session(session, token) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//         session.user.username = token.username;
//       } else {
//         console.log("token проєбали");
//       }
//       console.log("session=", session);
//       return session;
//     },
//   },
// };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
