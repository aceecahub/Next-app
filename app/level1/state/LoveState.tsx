"use client";
import { useState } from "react";

export default function LoveState() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <p className="text-2xl font-bold">Like: {count}</p>
      <button
        className={
          "font-bold py-2 px-4 rounded transition "
        }
        onClick={toggleLike}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
