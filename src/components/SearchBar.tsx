"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form className="flex items-center justify-between gap-4 p-2 bg-gray-100 rounded-md flex-1" onSubmit={handleSubmit}>
      <input className="flex-1 rounded-md bg-transparent outline-none" name="name" placeholder="Search" type="text" />
      <button className="cursor-pointer" type="submit">
        <Image src="/search.png" height={16} width={16} alt="SearchBar" />
      </button>
    </form>
  );
};

export default SearchBar;
