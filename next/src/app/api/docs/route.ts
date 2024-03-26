import { NextResponse } from "next/server";

import db from "../../../../libs/db";
import Docs from "../../../../models/Docs";

// get docs
export const GET = async (request: Request) => {
  await db.connect();
  try {
    const items = await Docs.find();
    return new NextResponse(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching documents" + error, {
      status: 500,
    });
  }
};

// add docs
export const POST = async (request: Request) => {
  await db.connect();
  try {
    const body = await request.json();

    const newDoc = await Docs.create({ body });
    return new NextResponse(JSON.stringify(newDoc), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error add new document" + error, {
      status: 500,
    });
  }
};
