"use client";
import { useState } from "react";

export default function HomeScreen() {
  const [message, setMessage] = useState("vasco da gama");
  return (
    <div className="flex items-center justify-center size-full flex-col gap-8">
      <h1>Hello berimbau</h1>
      <p>{message}</p>
      <button onClick={() => setMessage("new message!")}>change message</button>
    </div>
  );
}
