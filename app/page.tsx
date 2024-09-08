import AnimeList from "@/components/AnimeList";
import { get_data } from "../utils/fetch";
import Link from "next/link";

const Home = async () => {
  const resp: { data: any[]} = await get_data({ url: "/top/anime?limit=8" });
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href={`/populer`} className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {resp.data.map((item: { mal_id: number; title: string; images: {webp: {image_url: string}} }) => {
          return (
            <div key={item.mal_id} className="shadow-xl">
              <AnimeList title={item.title} image={item.images.webp.image_url} id={item.mal_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
