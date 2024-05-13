import db from "../../../../libs/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../../models/UserModel";

export async function POST(req) {
  try {
    await db.connect();
    const body = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const exists = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (exists) {
      return NextResponse.json(
        { message: "User or email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Error occurred while registering the user" },
      { status: 500 }
    );
  }
}
