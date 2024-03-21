import { notFound } from "next/navigation";

const { BASE_URL } = process.env;
const { PROD_URL } = process.env;

// const { NEXT_HOST } = process.env;

const url = PROD_URL || BASE_URL;
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
