"use client";

import React, { useMemo } from "react";

interface LegalContentViewProps {
  content: string;
}

export function LegalContentView({ content }: LegalContentViewProps) {
  const blocks = useMemo(() => {
    const lines = content.split("\n");
    const result: Array<{
      type: "h1" | "h2" | "h3" | "h4" | "paragraph" | "list-item" | "callout" | "hr";
      text: string;
    }> = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line === "---" || line === "***") {
        result.push({ type: "hr", text: "" });
      } else if (line.startsWith("#### ")) {
        result.push({ type: "h4", text: line.replace(/^####\s+/, "") });
      } else if (line.startsWith("### ")) {
        result.push({ type: "h3", text: line.replace(/^###\s+/, "") });
      } else if (line.startsWith("## ")) {
        result.push({ type: "h2", text: line.replace(/^##\s+/, "") });
      } else if (line.startsWith("# ")) {
        result.push({ type: "h1", text: line.replace(/^#\s+/, "") });
      } else if (line.startsWith("> ")) {
        result.push({ type: "callout", text: line.replace(/^>\s+/, "") });
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        result.push({ type: "list-item", text: line.replace(/^[-*]\s+/, "") });
      } else if (/^\d+\.\s+/.test(line)) {
        result.push({ type: "list-item", text: line });
      } else {
        result.push({ type: "paragraph", text: line });
      }
    }
    return result;
  }, [content]);

  return (
    <div className="text-gray-800 text-[13px] md:text-sm leading-relaxed space-y-3 font-normal">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h1":
            return (
              <h2
                key={idx}
                className="pt-4 pb-1 text-base md:text-lg font-bold text-gray-900 uppercase tracking-tight border-b border-gray-200 first:pt-0"
              >
                {renderInline(block.text)}
              </h2>
            );
          case "h2":
            return (
              <h3
                key={idx}
                className="pt-3 text-sm md:text-base font-bold text-gray-900 tracking-tight"
              >
                {renderInline(block.text)}
              </h3>
            );
          case "h3":
            return (
              <h4
                key={idx}
                className="pt-2 text-xs md:text-sm font-semibold text-gray-900"
              >
                {renderInline(block.text)}
              </h4>
            );
          case "h4":
            return (
              <h5 key={idx} className="pt-1 text-xs md:text-sm font-medium text-gray-800">
                {renderInline(block.text)}
              </h5>
            );
          case "callout":
            return (
              <div
                key={idx}
                className="my-2 border-l-2 border-gray-400 pl-3 py-1 text-gray-700 italic bg-gray-50"
              >
                {renderInline(block.text)}
              </div>
            );
          case "list-item":
            return (
              <div key={idx} className="flex items-start gap-2 pl-3 text-gray-700">
                <span className="text-gray-400 select-none">•</span>
                <span className="flex-1">{renderInline(block.text)}</span>
              </div>
            );
          case "hr":
            return <hr key={idx} className="my-4 border-gray-200" />;
          case "paragraph":
          default:
            return (
              <p key={idx} className="text-gray-700 text-justify">
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|https?:\/\/[^\s]+)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-gray-900">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      parts.push(
        <em key={match.index} className="italic text-gray-800">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith("http")) {
      parts.push(
        <a
          key={match.index}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline hover:text-black transition-colors"
        >
          {token}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
