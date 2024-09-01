import AnimeList from "@/app/components/AnimeList";
import { get_data } from "./utils/fetch";

const Home = async () => {
  const resp = await get_data({ url: "/top/anime" });
  return (
    <div>
      <h1>Paling Populer</h1>
      <AnimeList />
    </div>
  );
};
export default Home;
