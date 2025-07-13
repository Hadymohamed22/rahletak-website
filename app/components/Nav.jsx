"use client";

import Link from "next/link";
import { navLinks } from "../constants/navLinks";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="py-3 bg-white">
      <div className="container px-5 mx-auto flex items-center justify-between">
        <h3 className="logo text-2xl md:text-3xl font-bold text-primary">
          رحلتك
        </h3>
        <ul className="nav-links flex items-center gap-5">
          {navLinks.map((link) => {
            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-primary" : ""}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
