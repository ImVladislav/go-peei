"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div>
      <div>NewsEditor</div>
      <div>ProjectEditor</div>
    </div>
  );
};

export default AdminPage;
