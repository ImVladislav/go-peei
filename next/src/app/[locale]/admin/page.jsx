"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import NewsEditor from "./NewsEditor";
import Title from "../components/Title/Title";
import ProjectEditor from "./ProjectEditor";
import s from "./admin.module.scss";
import Button from "../components/Button/Button";
const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("news");

  useEffect(() => {
    console.log("Status:", status);
    console.log(session);
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="container">
        <Title>Фіксики перевіряють чи ви залогінені...</Title>
      </div>
    );
  }

  return (
    <div className="container">
      {status === "authenticated" ? (
        <>
          <div className={s.admin__btnContainer}>
            <Button
              newStyles={s.admin__btn}
              onClick={() => setActiveComponent("news")}
            >
              Робота з новинами
            </Button>
            <Button
              newStyles={s.admin__btn}
              onClick={() => setActiveComponent("project")}
            >
              Робота з проектами
            </Button>
          </div>
          {activeComponent === "news" && <NewsEditor />}
          {activeComponent === "project" && <ProjectEditor />}
        </>
      ) : (
        <Title>Фіксики вас запідозрили, тож допобачення...</Title>
      )}
    </div>
  );
};

export default AdminPage;
