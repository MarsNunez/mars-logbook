import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Topicsbar = () => {
  return (
    <div className="mx-4 border-b flex justify-between pr-3 items-center">
      <div className="flex">
        <Link href="/">
          <div className="md:hover:bg-gray-100 cursor-pointer pt-3 px-3 ">
            <div
              className={`${
                true
                  ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                  : "border-b-2 border-transparent"
              } pb-3 text-sm md:text-sm tracking-wide`}
            >
              New
            </div>
          </div>
        </Link>
        <Link href="/archive">
          <div className="md:hover:bg-gray-100 cursor-pointer pt-3 px-3">
            <div
              className={`${
                "asd" == "archive"
                  ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                  : "border-b-2 border-transparent"
              } pb-3 text-sm md:text-sm tracking-wide`}
            >
              Books
            </div>
          </div>
        </Link>
        <Link href="/about">
          <div className="md:hover:bg-gray-100 cursor-pointer pt-3 px-3">
            <div
              className={`${
                "1" == "about"
                  ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                  : "border-b-2 border-transparent"
              } pb-3 text-sm md:text-sm tracking-wide`}
            >
              Life
            </div>
          </div>
        </Link>
        <Link href="/about">
          <div className="md:hover:bg-gray-100 cursor-pointer pt-3 px-3">
            <div
              className={`${
                "1" == "about"
                  ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                  : "border-b-2 border-transparent"
              } pb-3 text-sm md:text-sm tracking-wide`}
            >
              Random
            </div>
          </div>
        </Link>
      </div>
      <MagnifyingGlassIcon className="h-5 cursor-pointer" />
    </div>
  );
};

export default Topicsbar;
