import { NextResponse } from "next/server";

import db from "../../../../libs/db";
import Docs from "../../../../models/Docs";

// get Docs
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
