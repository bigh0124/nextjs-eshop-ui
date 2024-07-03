"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(true);

  const router = useRouter();

  //TEST
  let isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
    setIsCartOpen(false);
  };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
    setIsProfileOpen(false);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image src="/profile.png" height={22} width={22} alt="" className="cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute top-12 left-0 p-4 rounded-md text-sm shadow-md z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image src="/notification.png" height={22} width={22} alt="" className="cursor-pointer" />
      <div className="relative cursor-pointer">
        <Image src="/cart.png" height={22} width={22} alt="" onClick={handleCart} />
        {isCartOpen && <CartModal />}
        <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full flex items-center justify-center text-sm bg-rd text-white">
          2
        </div>
      </div>
    </div>
  );
};

export default NavbarIcons;
