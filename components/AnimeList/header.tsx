import Link from "next/link";

export default function HeaderAnimeList({title, link_href, link_title}: {title: string, link_href?: string, link_title?: string}) {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link href={link_href ?? ''} className="md:text-xl text-md underline hover:text-indigo-500 transition-all">
        {link_title ?? ''}
      </Link>
    </div>
  );
}
