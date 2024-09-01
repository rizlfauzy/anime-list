import Image from "next/image";

export default function AnimeList() {
  return (
    <div className="grid grid-cols-3 gap-2 h-32">
      <div className="bg-indigo-500">
        <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={600} />
        <h3>Judul Anime</h3>
      </div>
      <div className="bg-indigo-500">Kotak 2</div>
      <div className="bg-indigo-500">Kotak 3</div>
      <div className="bg-indigo-500">Kotak 4</div>
      <div className="bg-indigo-500">Kotak 5</div>
      <div className="bg-indigo-500">Kotak 6</div>
    </div>
  );
}
