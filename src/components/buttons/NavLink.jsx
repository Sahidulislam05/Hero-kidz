"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  // For root path, do exact match; for other paths, check if it starts with href
  const isActive = href === "/" ? path === "/" : path.startsWith(href);

  return (
    <Link
      className={`${isActive ? "text-primary font-bold" : "font-medium"} transition-colors hover:text-primary`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
