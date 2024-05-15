"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Title from "../../components/Title/Title";
import styles from "../../contacts/contact.module.scss";
const Register = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function handleInput(e: any) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!info.username || !info.email || !info.password) {
      setError("Must provide all the credentials.");
    }
    try {
      setPending(true);

      // const res = await fetch("http://localhost:3000//api/register", {
      const res = await fetch("https://peei.org.ua/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (res.status === 201) {
        setPending(false);
        const form = e.target;
        form.reset();
        router.push("/login");
        console.log("user registered ");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("error");
    }
  }
  console.log({ info });
  return (
    <div className="container">
      <Title>Реєстрація</Title>
      <form onSubmit={handleSubmit}>
        <label>Поганяло</label>
        <input
          className={styles.input}
          type="text"
          name="username"
          onChange={(e) => handleInput(e)}
        />
        <label>Пошта</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          onChange={(e) => handleInput(e)}
        />
        <label>Пароль</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          onChange={(e) => handleInput(e)}
        />
        {error && <div>{error}</div>}
        <button disabled={pending ? true : false} type="submit">
          {pending ? "Реєстрація..." : "Зареєструватись"}
        </button>
      </form>
    </div>
  );
};

export default Register;
