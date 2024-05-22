import { existsSync } from "fs";
import { readdir, unlink, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const GET = async (request) => {
  const files = await readdir(path.join(process.cwd(), "public/images"));
  return NextResponse.json({ msg: "Images fetched successfully", files });
};

export const POST = async (request) => {
  const image = formData.get("image");
  const byteLength = await image.arrayBuffer();
  const bufferData = Buffer.from(byteLength);
  const imageName = nanoid() + path.extname(image.name);
  const imagePath = path.join(process.cwd(), "public/images", imageName);

  await writeFile(imagePath, bufferData);

  const imageUrl = `/images/${imageName}`;

  const newImage = {
    imageSrc: imageUrl,
  };

  console.log("Image uploaded successfully:", newImage);

  return NextResponse.json({ msg: "Image uploaded successfully", newImage });
};

export const DELETE = async (request) => {
  const imageName = request.nextUrl.searchParams.get("image");

  const imagePath = path.join(process.cwd(), "public/images", imageName);

  if (existsSync(imagePath)) {
    await unlink(imagePath);
    console.log(`Image deleted successfully: ${imagePath}`);
    return NextResponse.json({ msg: "Image deleted successfully" });
  }

  return NextResponse.json({ msg: "Image not found" });
};
