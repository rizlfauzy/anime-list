"use client";

import AnimeList, { Anime } from "@/components/AnimeList";
import Skeleton from "@/components/AnimeList/skeleton";
import { useLayoutEffect, useState } from "react";
import useAsync from "@/hooks/useAsync";
import { get_data } from "@/utils/fetch";
import HeaderAnimeList from "@/components/AnimeList/header";

export default function Populer() {
  const [populer_anime, set_populer_anime] = useState<Anime[]>([]);
  const { run, is_loading } = useAsync();


  useLayoutEffect(() => {
    const get_populer_anime = async () => {
      const populer_anime: { data: Anime[] } = await run(get_data({ url: "/top/anime?page=1" }));
      set_populer_anime(populer_anime.data);
    }
    get_populer_anime();
  }, [run]);

  return (
    <>
      {/* anime ter populer */}
      <section>
        <HeaderAnimeList title="Paling Populer" />
        {is_loading ? <Skeleton /> : <AnimeList api={{ data: populer_anime }} />}
      </section>
    </>
  );
}