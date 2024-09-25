"use client";

import { debounce } from "@/utils/debounce";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function InputSearch({input_keyword}: {input_keyword: React.RefObject<HTMLInputElement>}) {
  const search_params = useSearchParams();
  const router = useRouter();

  const search_anime = (keyword: string) => {
    const params = new URLSearchParams(search_params);
    if (keyword != "") {
      params.set("q", keyword);
      router.push(`/search?${params.toString()}`);
    } else {
      params.delete("q");
      router.push(`/`);
    }
  };

  const handle_search = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    search_anime(keyword);
  }, 500);

  const handle_keyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const keyword = input_keyword.current?.value || "";
      search_anime(keyword);
    }
  };

  const handle_click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const keyword = input_keyword.current?.value || "";
    search_anime(keyword);
  };

  return (
    <label className="ds-input ds-input-bordered flex items-center gap-2 md:w-auto w-full" htmlFor="search_anime">
      <input type="text" className="grow" id="search_anime" name="search" placeholder="Cari Anime ..." defaultValue={search_params?.get("q")?.toString() ?? ""} onChange={handle_search} onKeyDown={handle_keyup} ref={input_keyword} />
      <button type="button" onClick={handle_click}>
        <MagnifyingGlass size={24} />
      </button>
    </label>
  );
}
