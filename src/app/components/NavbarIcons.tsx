"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  //TEST
  let isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
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
      <Image src="/cart.png" height={22} width={22} alt="" className="cursor-pointer" />
    </div>
  );
};

export default NavbarIcons;
