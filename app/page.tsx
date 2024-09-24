import AnimeList, {Anime} from "@/components/AnimeList";
import { get_data } from "../utils/fetch";
import HeaderAnimeList from "@/components/AnimeList/header";

const Home = async () => {
  const top_anime: { data: Anime[] } = await get_data({ url: "/top/anime?limit=8" });
  return (
    <>
      {/* anime ter populer */}
      <section>
        <HeaderAnimeList title="Paling Populer" link_href="/populer" link_title="Lihat Semua" />
        <AnimeList api={top_anime} />
      </section>
    </>
  );
};
export default Home;
