"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import NewsEditor from "./NewsEditor";

const AdminPage = () => {
  const { data: status } = useSession();
  const router = useRouter();
  console.log(status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NewsEditor />
      <div>ProjectEditor</div>
    </div>
  );
};

export default AdminPage;
