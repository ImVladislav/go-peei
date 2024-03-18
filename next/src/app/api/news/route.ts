import { NextResponse } from "next/server";

import db from "../../../../libs/db";
import News from "../../../../models/News";

// get news
export const GET = async (request: Request) => {
  await db.connect();
  try {
    const items = await News.find();
    return new NextResponse(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching news" + error, {
      status: 500,
    });
  }
};
// add news
export const POST = async (request: Request) => {
  await db.connect();
  try {
    const body = await request.json();

    // if (body.firstNew === true) {
    //   const items = await News.find({ firstNew });
    // }

    const newNews = await News.create({ body });
    return new NextResponse(JSON.stringify(newNews), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error add new news" + error, {
      status: 500,
    });
  }
};
