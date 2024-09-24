"use client";

import Link from "next/link";
import InputSearch from "./input_search";
import { useRef } from "react";

export default function Navbar() {
  const input_keyword = useRef<HTMLInputElement>(null);

  const home_click = () => {
    if (input_keyword.current) {
      input_keyword.current.value = "";
      input_keyword.current.focus()
    }
  };

  return (
    <header className="bg-indigo-500 sticky top-0">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 items-center">
        <Link href={`/`} className="font-bold text-white text-2xl" onClick={home_click}>
          AnimeList
        </Link>
        <InputSearch input_keyword={input_keyword} />
      </div>
    </header>
  );
}
