import { NextResponse } from "next/server";
import Docs from "../../../../../models/Docs";
import db from "../../../../../libs/db";

// get id Docs
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const data = await Docs.findById(id);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Document was not found" + error, {
      status: 500,
    });
  }
};
