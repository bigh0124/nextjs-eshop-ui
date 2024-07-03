import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between">
        {/* MOBILE */}
        <div className="h-full w-full flex items-center justify-between md:hidden">
          <Link href="/">
            <div className="text-2xl tracking-wide">Shop</div>
          </Link>
          <Menu />
        </div>
        {/* BIGGER SCREEN */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full w-full">
          {/* LEFT */}
          <div className="w-1/3 lg:w-1/2 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" height={24} width={24} alt="Logo" />
              <div className="text-2xl tracking-wide">Shop</div>
            </Link>
            <div className="hidden lg:flex gap-2">
              <Link href="/">Homepage</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-2/3 lg:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavbarIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
