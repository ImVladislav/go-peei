"use client";
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

const AuthManager = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!session && token) {
      const user = JSON.parse(token);
      signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
      }).then((response) => {
        if (response.error) {
          console.log("Sign-in error:", response.error);
        } else {
          console.log("Sign-in response:", response);
        }
      });
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      const token = {
        id: session.user.id,
        email: session.user.email,
        username: session.user.username,
      };
      localStorage.setItem("authToken", JSON.stringify(token));
      console.log("Auth token saved to localStorage:", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [session]);

  return null;
};

export default AuthManager;
