import Link from "next/link";

const Navbar = ({ current }) => {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center md:grid md:grid-cols-3 px-4 md:px-6 pt-3 md:py-3 md:border-b">
        <div className="left-content">
          <Link href="/">
            <img
              src="/img/mars.png"
              alt="logo image"
              className="rounded-full h-9 md:h-14"
            />
          </Link>
        </div>

        <div className="middle-content flex items-center justify-center">
          <Link href={"/"}>
            <h1 className="w-full font-duneRise font-extrabold text-sm sm:text-xl uppercase">
              Mars Logbook
            </h1>
          </Link>
        </div>

        <div className="right-content content-end flex flex-col items-end">
          <div className="w-fit font-medium md:font-semibold text-xs md:text-sm flex gap-1 md:gap-3 my-auto">
            <a
              href="https://www.youtube.com/channel/UC4XpWwLaIyuxYUB3LGV8IjQ"
              target="_blank"
              className="bg-gradient-to-r from-orange-500 to-red-500 h-fit px-3 md:px-5 py-2 md:py-3 rounded-md cursor-pointer md:hover:scale-110 ease-out duration-100"
            >
              Subscribe
            </a>
            <div className="h-fit px-3 md:px-5 py-2 md:py-3 hidden sm:block">
              Sign in
            </div>
          </div>
        </div>
      </nav>
      {current == "archive-post" ? (
        <div className="border-b mt-3 md:hidden" />
      ) : (
        <div className="border-b flex px-1 md:justify-center">
          <Link href="/">
            <div className="md:hover:bg-gray-100 cursor-pointer px-3 pt-3 ">
              <div
                className={`${
                  current == null
                    ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                    : "border-b-2 border-transparent"
                } pb-3 text-xs md:text-sm tracking-wide`}
              >
                Home
              </div>
            </div>
          </Link>
          <Link href="/archive">
            <div className="md:hover:bg-gray-100 cursor-pointer px-3 pt-3">
              <div
                className={`${
                  current == "archive"
                    ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                    : "border-b-2 border-transparent"
                } pb-3 text-xs md:text-sm tracking-wide`}
              >
                Archive
              </div>
            </div>
          </Link>
          <Link href="/about">
            <div className="md:hover:bg-gray-100 cursor-pointer px-3 pt-3">
              <div
                className={`${
                  current == "about"
                    ? "font-semibold border-b-2 border-orange-500 text-orange-500"
                    : "border-b-2 border-transparent"
                } pb-3 text-xs md:text-sm tracking-wide`}
              >
                About
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
