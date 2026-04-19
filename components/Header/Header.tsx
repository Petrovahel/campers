"use client";

import Link from "next/link";
import css from "./Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link href="/">
        <Image
          src="/images/logo/TravelTrucksLogo.svg"
          alt="Travel Trucks logo"
          width={120}
          height={40}
        />
      </Link>
      <nav className={css.nav}>
        <Link
          href="/"
          className={`${css.navItem} ${pathname === "/" ? css.active : ""}`}
          onClick={(e) => {
            if (pathname === "/") e.preventDefault();
          }}
        >
          Home
        </Link>

        <Link
          href="/catalog"
          className={`${css.navItem} ${
            pathname === "/catalog" ? css.active : ""
          }`}
          onClick={(e) => {
            if (pathname === "/catalog") e.preventDefault();
          }}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}
