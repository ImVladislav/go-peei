import { NextResponse } from "next/server";

import db from "../../../../libs/db";
import Project from "../../../../models/Project";

import { uploadImage } from "../../../../libs/uploadImage";
// import { unlink } from "fs/promises";
// import path from "path";

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
    let imageSrc = '';

     if (body.images && body.images.length > 0) {
      const image = body.images[0];
      imageSrc = await uploadImage(image, "projects");
    }

    const projectData = {
      ...body,
      imageSrc,  // включаємо imageSrc в дані проекту
    };

    const result = await Project.create(projectData);
    return new NextResponse(JSON.stringify(result), {
      status: 201,
    });
  } catch (error : any) {
    return new NextResponse("Error add new project: " + error.message, {
      status: 500,
    });
  }
};