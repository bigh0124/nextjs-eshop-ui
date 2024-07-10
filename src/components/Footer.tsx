import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-100 w-full py-32 mt-24">
      <div className="flex flex-col gap-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex justify-between gap-24 flex-col sm:flex-row">
          <div className="flex flex-col gap-8 grow-[2]">
            <h1 className="text-2xl tracking-wide">SHOP</h1>
            <p className="text-sm">2341 Alblls way, Central upload down town, CT 920A, 120 ST. TW</p>
            <span className="font-semibold">nextjs@shop.mail</span>
            <span className="font-semibold">+1 234 567 890</span>
            <div className="flex gap-6">
              <Image src="/x.png" height={16} width={16} alt="" />
              <Image src="/facebook.png" height={16} width={16} alt="" />
              <Image src="/pinterest.png" height={16} width={16} alt="" />
              <Image src="/instagram.png" height={16} width={16} alt="" />
              <Image src="/youtube.png" height={16} width={16} alt="" />
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-20 grow">
            <h1 className="text-xl font-semibold">COMPANY</h1>
            <nav>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <Link href="/">About us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Careers</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Affiliates</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Blog</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden xl:flex flex-col gap-20 grow">
            <h1 className="text-xl font-semibold">COMPANY</h1>
            <nav>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <Link href="/">About us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Careers</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Affiliates</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Blog</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex flex-col gap-20 grow">
            <h1 className="text-xl font-semibold">COMPANY</h1>
            <nav>
              <ul className="flex flex-col gap-4">
                <li className="text-sm">
                  <Link href="/">About us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Careers</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Affiliates</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Blog</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-8 grow-[2]">
            <h1 className="text-lg font-semibold">SUBSCRIBE</h1>
            <p className="text-sm">Be the first to get the news about trends, promotions, and much more!</p>
            <div className="flex">
              <input type="text" placeholder="Email address" className="px-4 py-3 outline-none" />
              <button type="button" className="px-4 bg-rd text-white cursor-pointer">
                JOIN
              </button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex gap-6">
              <Image src="/discover.png" height={16} width={30} alt="" />
              <Image src="/visa.png" height={16} width={30} alt="" />
              <Image src="/paypal.png" height={16} width={30} alt="" />
              <Image src="/mastercard.png" height={16} width={30} alt="" />
              <Image src="/skrill.png" height={16} width={30} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>@ 2024 E-SHOP</span>
          <div className="flex gap-6">
            <div>
              <span className="mr-4 text-slate-500">Language</span>
              <span className="font-semibold">United States | English</span>
            </div>
            <div>
              <span className="mr-4 text-slate-500">Currency</span>
              <span className="font-semibold">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
