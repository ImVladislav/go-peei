import { NextResponse } from "next/server";

import db from "../../../../../libs/db";
import Project from "../../../../../models/Project";

// get id
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const data = await Project.findById(id);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Project was not found" + error, {
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

    const data = await Project.findById(id);

    const updateProject = await Project.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new NextResponse(JSON.stringify(updateProject), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Project was not found" + error, {
      status: 500,
    });
  }
};

// delete project
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  try {
    const id = params.id;
    const project = await Project.findById(id);
    if (!project) {
      return new NextResponse(`Project with ID ${id} was not found`, {
        status: 404,
      });
    }

    await Project.findByIdAndDelete(id);

    //  перехід на головну при видаленні
    //   redirect("/");

    return NextResponse.json({
      message: `Project ${id} has been successfully deleted`,
    });
  } catch (error) {
    return new NextResponse("Error delete project" + error, {
      status: 500,
    });
  }
};
