import { NextResponse } from "next/server";

import db from "../../../../../libs/db";
import News from "../../../../../models/News";

// get id
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const data = await News.findById(id);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("News was not found" + error, {
      status: 500,
    });
  }
};

// delete news
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  try {
    const id = params.id;
    const data = await News.findById(id);
    if (!data) {
      return new NextResponse(`News with ID ${id} was not found`, {
        status: 404,
      });
    }

    await News.findByIdAndDelete(id);

    return NextResponse.json({
      message: `News ${id} has been successfully deleted`,
    });
  } catch (error) {
    return new NextResponse("News was not found" + error, {
      status: 500,
    });
  }
};
