"use client";
import { useState } from "react";

type Props = {};

const Input = (props: Props) => {
  const [input, setInput] = useState("");
  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x divide-black">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt..."
          rows={1}
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          type="submit"
          disabled={!input}
          className={`p-4 font-semibold ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
        <button
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-semibold disabled:text-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="button"
        >
          Use Suggestion
        </button>
        <button
          className="p-4 bg-slate-100 text-violet-500 transition-colors duration-200 font-semibold disabled:text-gray-300 rounded-b-md md:rounded-r-md md:rounded-bl-none disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="button"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
};

export default Input;
