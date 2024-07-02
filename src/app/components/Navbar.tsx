import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between">
        {/* MOBILE */}
        <Link href={"/"} className="text-2xl tracking-wide">
          E-Shop
        </Link>
        <Menu />
        {/* BIGGER SCREEN */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/* LEFT */}
          <div className="w-1/3">
            <Link href="/">
              <Image src="/logo.png" height={24} width={24} alt="Logo" />
              <div className="text-2xl tracking-wide">E-Shop</div>
            </Link>
          </div>
          {/* RIGHT */}
          <div className="w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
