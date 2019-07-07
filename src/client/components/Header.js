import React from "react";
import Link from "next/link";

export default ({ pathname }) => (
  <header>
    <Link href="/">
      <a>Home</a>
    </Link>{" "}
    <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>{" "}
    <Link href={{ pathname: "/bangtin/2", query: { id: '2' } }} as="/bangtin">
      <a>Bang Tin #2</a>
    </Link>
  </header>
);
