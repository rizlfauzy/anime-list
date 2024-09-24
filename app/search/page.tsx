import AnimeList, { Anime } from "@/components/AnimeList";
import { get_data } from "@/utils/fetch";
import HeaderAnimeList from "@/components/AnimeList/header";

export default async function Search({ searchParams }: { searchParams?: { q?: string } }) {
  const search_anime: { data: Anime[] } = await get_data({ url: `/anime?q=${searchParams?.q}` });
  return (
    <>
      {/* anime di cari */}
      <section>
        <HeaderAnimeList title={`Pencarian untuk keyword ${searchParams?.q}...`} />
        <AnimeList api={search_anime} />
      </section>
    </>
  );
}
