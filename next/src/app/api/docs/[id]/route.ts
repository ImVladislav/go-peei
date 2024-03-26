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

// put id
export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const body = await request.json();

    const data = await Docs.findById(id);

    const updateDocs = await Docs.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new NextResponse(JSON.stringify(updateDocs), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Docs was not found" + error, {
      status: 500,
    });
  }
};

// delete docs
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  try {
    const id = params.id;
    const data = await Docs.findById(id);
    if (!data) {
      return new NextResponse(`Docs with ID ${id} was not found`, {
        status: 404,
      });
    }

    await Docs.findByIdAndDelete(id);

    return NextResponse.json({
      message: `Docs ${id} has been successfully deleted`,
    });
  } catch (error) {
    return new NextResponse("Docs was not found" + error, {
      status: 500,
    });
  }
};
