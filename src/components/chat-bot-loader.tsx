"use client";

import dynamic from "next/dynamic";

// Defer the chat widget so it never blocks initial render / hydration.
// It is a floating button, so server rendering is unnecessary.
const ChatBot = dynamic(
  () => import("./chat-bot").then((mod) => mod.ChatBot),
  { ssr: false }
);

export function ChatBotLoader() {
  return <ChatBot />;
}
