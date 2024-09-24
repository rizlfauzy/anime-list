import Image from "next/image";
import Link from "next/link";

// exxport interface
export interface Anime {
  mal_id: number;
  title: string;
  images: { webp: { image_url: string } };
}

export default function AnimeList({ api }: { api: { data: Anime[] } }) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api?.data?.map((anime: Anime) => {
        return (
          <div key={anime.mal_id} className="shadow-xl">
            <Link href={`/${anime.mal_id}`} className="cursor-pointer">
              <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="object-cover w-full max-h-64" />
              <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
            </Link>
          </div>
        );
      })}

    </div>
  );
}
