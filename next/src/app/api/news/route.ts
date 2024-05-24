import { NextResponse } from "next/server";
import db from "../../../../libs/db";
import News from "../../../../models/News";
import { uploadImage } from "../../../../libs/uploadImage";

import { unlink } from "fs/promises";
import path from "path";
// Get news
export const GET = async (request: Request) => {
  await db.connect();
  try {
    const items = await News.find();
    return new NextResponse(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching news: " + error, {
      status: 500,
    });
  }
};

// Add news
export const POST = async (request: Request) => {
  await db.connect();
  try {
    const body = await request.json();
    
    let imageSrc = '';
    if (body.image) {
      imageSrc = await uploadImage(body.image, "news");
    }

    const newNews = await News.create({
      title: body.title,
      titleEn: body.titleEn,
      description: body.description,
      descriptionEn: body.descriptionEn,
      imageSrc: imageSrc,
      firstNew: body.firstNew || false,
    });

    return new NextResponse(JSON.stringify(newNews), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error adding new news: " + error, {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request) => {
  const id = new URL(request.url).searchParams.get('id');
  await db.connect();
  try {
    const news = await News.findById(id);
    if (!news) {
      return new NextResponse("News not found", {
        status: 404,
      });
    }

    // Delete the image file
   const imagePath = path.join(process.cwd(), "public", news.imageSrc);
    try {
      await unlink(imagePath);
    } catch (error:any) {
      if (error.code !== 'ENOENT') {
        // If the error is not because the file was not found, rethrow the error
        throw error;
      }
      // Log if the image was not found
      console.warn(`Image not found: ${imagePath}`);
    }

    await News.findByIdAndDelete(id);
    return new NextResponse("News deleted successfully", {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting news:", error);
    return new NextResponse("Error deleting news: " + error, {
      status: 500,
    });
  }
};

// Delete news

// export const DELETE = async (request: Request) => {
//   const id = new URL(request.url).searchParams.get('id');
//   await db.connect();
//   try {
//     await News.findByIdAndDelete(id);
//     return new NextResponse("News deleted successfully", {
//       status: 200,
//     });
//   } catch (error) {
//     return new NextResponse("Error deleting news: " + error, {
//       status: 500,
//     });
//   }
// };




// // add news
// export const POST = async (request: Request) => {
//   await db.connect();
//   try {
//     const body = await request.json();
//     const newNews = await News.create(body);
//     return new NextResponse(JSON.stringify(newNews), {
//       status: 201,
//     });
//   } catch (error) {
//     return new NextResponse("Error add new news" + error, {
//       status: 500,
//     });
//   }
// };




