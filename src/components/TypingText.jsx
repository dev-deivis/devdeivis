import React from "react";
import useTyping from "../hooks/useTyping";

export default function TypingText({ text, speed = 55, delay = 0, className = "", color = "#64ffda" }) {
  const { displayed, done } = useTyping(text, speed, delay);
  return (
    <span className={className} style={{ color }}>
      {displayed}
      {!done && (
        <span
          className="typing-cursor"
          style={{ background: color }}
        />
      )}
    </span>
  );
}
