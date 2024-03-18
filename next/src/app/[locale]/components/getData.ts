import { notFound } from "next/navigation";

const { BASE_URL } = process.env;

export async function getData(name: string) {
  const res = await fetch(`${BASE_URL}/api/${name}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}
export async function getDataId(name: string, id: string) {
  const res = await fetch(`${BASE_URL}/api/${name}/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}
