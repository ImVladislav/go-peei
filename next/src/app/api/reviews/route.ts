import { NextResponse } from "next/server";

import db from "../../../../libs/db";
import Review from "../../../../models/Review";

// get reviews
export const GET = async (request: Request) => {
  await db.connect();
  try {
    const items = await Review.find();
    return new NextResponse(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching reviews" + error, {
      status: 500,
    });
  }
};

// add review
export const POST = async (request: Request) => {
  await db.connect();
  try {
    const body = await request.json();

    const result = await Review.create({ ...body });
    return new NextResponse(JSON.stringify(result), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error add new review" + error, {
      status: 500,
    });
  }
};
