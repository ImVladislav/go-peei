"use client";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const AdminPage = async () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/");
  }
  return (
    <div>
      <div>NewsEditor</div>
      <div>ProjectEditor</div>
    </div>
  );
};

export default AdminPage;
