import { NextResponse } from "next/server";

import db from "../../../../../libs/db";
import News from "../../../../../models/News";
import { unlink } from "fs/promises";
import path from "path";
import { uploadImage } from "../../../../../libs/uploadImage";
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

// put id
export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  await db.connect();
  const id = params.id;
  try {
    const body = await request.json();

    const data = await News.findById(id);

    const updateNews = await News.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return new NextResponse(JSON.stringify(updateNews), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("News was not found" + error, {
      status: 500,
    });
  }
};

// delete news
// export const DELETE = async (
//   request: Request,
//   { params }: { params: { id: string } }
// ) => {
//   const id = new URL(request.url).searchParams.get('id');
//   await db.connect();
//   try {
//     // const id = params.id;
//     const data = await News.findById(id);
//     if (!data) {
//       return new NextResponse(`News with ID ${id} was not found`, {
//         status: 404,
//       });
//     }

//     await News.findByIdAndDelete(id);

//     return NextResponse.json({
//       message: `News ${id} has been successfully deleted`,
//     });
//   } catch (error) {
//     return new NextResponse("News was not found" + error, {
//       status: 500,
//     });
//   }
// };
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

  // Видаляємо зображення
   const imagePath = path.join(process.cwd(), "public", news.imageSrc);
    try {
      await unlink(imagePath);
    } catch (error:any) {
      if (error.code !== 'ENOENT') {

        throw error;
      }

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

export const PATCH = async (request: Request) => {
  const id = new URL(request.url).searchParams.get('id');
  await db.connect();
  try {
    const body = await request.json();
    
    let imageSrc = body.imageSrc;

    // If there's a new image, upload it and delete the old one
    if (body.image && body.image.data) {
      const news = await News.findById(id);
      if (news && news.imageSrc) {
        const oldImagePath = path.join(process.cwd(), "public", news.imageSrc);
        try {
          await unlink(oldImagePath);
        } catch (error:any) {
          if (error.code !== 'ENOENT') {
            throw error;
          }
          console.warn(`Old image not found: ${oldImagePath}`);
        }
      }
      imageSrc = await uploadImage(body.image, "news");
    }

    const updatedNews = await News.findByIdAndUpdate(
      id,
      {
        title: body.title,
        titleEn: body.titleEn,
        description: body.description,
        descriptionEn: body.descriptionEn,
        imageSrc: imageSrc,
        firstNew: body.firstNew || false,
      },
      { new: true }
    );

    if (!updatedNews) {
      return new NextResponse("News not found", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(updatedNews), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error updating news: " + error, {
      status: 500,
    });
  }
};
