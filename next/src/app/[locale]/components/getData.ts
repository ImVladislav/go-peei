import { notFound } from "next/navigation";

const host = process.env.NEXT_HOST || "localhost:3000";
const tls = process.env.NEXT_TLS || "false";

const url = tls === "true" ? `https://${host}` : `http://${host}`;

export async function getData(name: string) {
  const res = await fetch(`${url}/api/${name}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}
export async function getDataId(name: string, id: string) {
  const res = await fetch(`${url}/api/${name}/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}

// // create data
// const currentDate = new Date();
// console.log(currentDate);
