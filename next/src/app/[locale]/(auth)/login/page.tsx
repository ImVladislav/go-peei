"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import Title from "../../components/Title/Title";

import styles from "../../contacts/contact.module.scss";

const Login = () => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/admin");
    }
  }, [status, router]);

  function handleInput(e: any) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("Must provide all the credentials.");
      return;
    }
    try {
      setPending(true);
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });

      if (res && res.error) {
        setError("Invalid credentials");
      } else {
        router.replace("/");
      }
    } catch (error) {
      setError("Error occurred while logging in");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="container">
      <div className={styles.wrap}>
        <Title>Логін</Title>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label>Пошта Email</label>
            <input
              className={styles.input}
              style={{ border: "1px solid black" }}
              type="email"
              name="email"
              onChange={(e) => handleInput(e)}
            />
            <label>Пароль</label>
            <input
              className={styles.input}
              style={{ border: "1px solid black" }}
              type="password"
              name="password"
              onChange={(e) => handleInput(e)}
            />

            {error && <div>{error}</div>}
            <button disabled={pending ? true : false} type="submit">
              {pending ? "Logining" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
