import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ title, image, id }: { title: string, image: string;  id:number}) {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={image} alt="..." width={350} height={350} className="object-cover w-full max-h-64" />
      <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
    </Link>
  );
}
