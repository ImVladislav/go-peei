import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="container">
      <h2>Not Found - 404!</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
