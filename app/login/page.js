"use client";
import React from "react";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className="flex flex-col bg-green-300 justify-center items-center">
      <input
        className="bg-white p-2 m-2"
        placeholder="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        className="bg-white p-2 m-2"
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <select
        className="bg-amber-200"
        onChange={(event) => {
          setRole(event.target.value);
        }}
      >
        <option value={"user"}>User</option>
        <option value={"agent"}>Agent</option>
      </select>
      <button
        className="bg-red-400 p-2"
        onClick={async (event) => {
          console.log(email);
          console.log(password);
          console.log(role);
          const result = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              role: role,
            }),
          }).then((response) => response.json());
          alert(JSON.stringify(result));
          localStorage.setItem("token", result.token);
        }}
      >
        Login
      </button>
    </div>
  );
}
