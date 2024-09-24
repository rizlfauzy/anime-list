import AnimeList, { Anime } from "@/components/AnimeList";
import { get_data } from "@/utils/fetch";
import HeaderAnimeList from "@/components/AnimeList/header";

const Populer = async () => {
  const populer_anime: { data: Anime[] } = await get_data({ url: "/top/anime" });
  return (
    <>
      {/* anime ter populer */}
      <section>
        <HeaderAnimeList title="Paling Populer" />
        <AnimeList api={populer_anime} />
      </section>
    </>
  );
};
export default Populer;
