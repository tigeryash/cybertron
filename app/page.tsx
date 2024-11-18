"use client";

import { useChat } from "ai/react";
import ModelChoice from "./components/chat-window-components/modelChoice";
import { Square } from "lucide-react";
import Input from "./components/chat-window-components/input";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } =
    useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-10 mx-auto stretch">
      <ModelChoice />

      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      {isLoading && (
        <button
          className="fixed bottom-32 right-[50%] border border-slate-200 bg-black rounded-full p-2 "
          onClick={stop}
        >
          <Square size={20} strokeWidth={0.5} color="white" />
        </button>
      )}
      <Input
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
      />
    </div>
  );
}
