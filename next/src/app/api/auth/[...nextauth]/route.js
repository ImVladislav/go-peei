import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import db from "../../../../../libs/db";
import User from "../../../../../models/UserModel";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { authOptions } from "./authOptions";
async function login(credentials) {
  try {
    await db.connect();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("No user found with this email");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error("Password doesn't match");
    return user;
  } catch (error) {
    console.log("Error while logging in:", error);
  }

  // const exists = await User.findOne({
  //   $or: [{ email: email }, { username: username }],
  // });
  // if (exists) {
  //   return NextResponse.json(
  //     { message: "User or email already exists" },
  //     { status: 400 }
  //   );
  // }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
