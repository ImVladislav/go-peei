import { NextResponse } from "next/server";

import db from "../../../../../libs/db";
import Review from "../../../../../models/Review";

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
