import path from "path";
import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";

export const uploadImage = async (image: { data: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }; name: string; }, pathFoulder:string) => {
  const bufferData = Buffer.from(image.data, 'base64');
  const imageName = nanoid() + path.extname(image.name);
  const imagePath = path.join(process.cwd(), "public", `${pathFoulder}`, imageName);
  await writeFile(imagePath, bufferData);
  return `/${pathFoulder}/${imageName}`;
};


