import { NextResponse } from "next/server";

import db from "../../../../libs/db";
import Project from "../../../../models/Project";

// get projects
export const GET = async (request: Request) => {
  await db.connect();
  try {
    const projects = await Project.find();
    return new NextResponse(JSON.stringify(projects), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching project" + error, {
      status: 500,
    });
  }
};

// add project
export const POST = async (request: Request) => {
  await db.connect();
  try {
    const body = await request.json();

    const result = await Project.create({ ...body });
    return new NextResponse(JSON.stringify(result), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error add new project" + error, {
      status: 500,
    });
  }
};
