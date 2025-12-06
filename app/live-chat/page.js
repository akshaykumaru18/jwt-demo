"use client";
import { useEffect, useState } from "react";
export default function ChatPage() {
  const [socket, setSocket] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function connect() {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onopen = () => {
      alert("You connected to live chat");
    };

    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    ws.onclose = () => {
      console.log("Disconnected");
    };

    setSocket(ws);
  }

  return (
    <div className="flex flex-col bg-amber-200 p-4">
      <h1 className="text-3xl">Live Chat Demo</h1>
      <button className="bg-green-600 text-black p-4 m-4" 
      onClick={(event)=> {
        connect()
      }}
      >Connect</button>
      <div className="flex flex-row text-black p-4 m-4">
        <input
          className="p-4 w-[400px] bg-white border-black rounded-2xl"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button className="bg-red-400 p-4 rounded-2xl"
        onClick={(event)=> {
            //sending the message
            socket.send(message)

        }}
        
        >Send</button>
      </div>

      {messages.map((msg,index)=> {
            return <div key={index}>{msg}</div>
      })}
    </div>
  );
}
