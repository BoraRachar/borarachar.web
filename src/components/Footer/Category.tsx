import Link from "next/link";

interface CategoryProps {
  name: string;
  links: Link[];
}
interface Link {
  name: string;
  url: string;
}

export default function Category({ name, links }: CategoryProps) {
  return (
    <section id={`category-wrapper-${name}`}>
      <h3 id={`category-title-${name}`} className="font-semibold text-lg">
        {name}
      </h3>
      <nav
        id={`category-nav-${name}`}
        className="flex flex-col mt-[35px] gap-[15px]"
      >
        {links.map((link) => (
          <Link
            key={link.name}
            id={`category-link-${link.name}`}
            href={link.url}
            className="text-[15px] text-[#637381]"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
