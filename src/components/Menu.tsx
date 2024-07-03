"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        width={28}
        height={28}
        alt="menu"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute left-0 top-20 text-white bg-black flex flex-col h-[calc(100vh-80px)] items-center justify-center w-full gap-8 z-10 text-xl">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
