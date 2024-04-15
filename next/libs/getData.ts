import { notFound } from "next/navigation";

const host = process.env.NEXT_HOST || "http://localhost:3000";
const tls = process.env.NEXT_TLS || "false";

const url = tls === "true" ? `https://${host}` : `http://${host}`; // // important!!!
// const url = "http://localhost:3000"; //localhost

// get all
export async function getData(name: string) {
  const res = await fetch(`${url}/api/${name}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}

// get id
export async function getDataId(name: string, id: string) {
  const res = await fetch(`${url}/api/${name}/${id}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}

// add
export async function addData(name: string, formData: any) {
  const res = await fetch(`${url}/api/${name}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) return notFound();
  console.log("Seved to db");
  return res.json();
}

// delete
export async function removeDataId(name: string, id: string) {
  const res = await fetch(`${url}/api/${name}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) return notFound();
  console.log("Delete in db");
}

// change;
export async function editDataId(name: string, id: string, formData: any) {
  const res = await fetch(`${url}/api/${name}/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ ...formData }),
  });
  if (!res.ok) return notFound();
  console.log("Seved to db");
}
