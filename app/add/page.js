"use client";
import React from "react";
import { useState } from "react";
export default function AddStudentPage() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [std, setStd] = useState("");
  const [sec, setSec] = useState("");

  return (
    <div className="flex flex-col bg-yellow-200 min-h-screen p-2">
      <div>Student Data</div>
      <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
        className="bg-white text-black border-black p-2 m-2"
      />
      <input
        placeholder="ID"
        onChange={(event) => {
          setId(event.target.value);
        }}
        className="bg-white text-black border-black p-2 m-2"
      />
      <input
        placeholder="Standard"
        onChange={(event) => {
          setStd(event.target.value);
        }}
        className="bg-white text-black border-black p-2 m-2"
      />
      <input
        placeholder="Section"
        onChange={(event) => {
          setSec(event.target.value);
        }}
        className="bg-white text-black border-black p-2 m-2"
      />

      <button
        className="bg-blue-500 p-2 text-lg"
        onClick={async (event) => {
          const result = await fetch("http://localhost:3001/students/add", {
            method: "POST",
            headers: {
              'authorization': `${localStorage.getItem('token')}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              name: name,
              std: std,
              sec: sec,
            }),
          }).then((response)=> response.json());
          alert(JSON.stringify(result))
        }}
      >
        Add
      </button>
    </div>
  );
}
