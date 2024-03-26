import { NextResponse } from "next/server";

import db from "../../../../../libs/db";
import Review from "../../../../../models/Review";

// get id
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const data = await Review.findById(id);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Review was not found" + error, {
      status: 500,
    });
  }
};

// put id
export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const body = await request.json();

    const data = await Review.findById(id);

    const updateReview = await Review.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new NextResponse(JSON.stringify(updateReview), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Review was not found" + error, {
      status: 500,
    });
  }
};

// delete review
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  try {
    const id = params.id;
    const review = await Review.findById(id);
    if (!review) {
      return new NextResponse(`Review with ID ${id} was not found`, {
        status: 404,
      });
    }

    await Review.findByIdAndDelete(id);

    return NextResponse.json({
      message: `Review ${id} has been successfully deleted`,
    });
  } catch (error) {
    return new NextResponse("Error delete review" + error, {
      status: 500,
    });
  }
};
