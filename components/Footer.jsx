import { BookmarkIcon, CursorArrowRippleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-100 pt-10 pb-8 font-light text-gray-500 text-sm text-center">
      <p>© 2022 Mars Nunez</p>
      <ul className="flex py-2 justify-center gap-2">
        <li className="underline cursor-pointer">Privacy</li>
        <p>•</p>
        <li className="underline cursor-pointer">Terms</li>
        <p>•</p>
        <li className="underline cursor-pointer">Collection notice</li>
      </ul>
      <div className="flex justify-center gap-2 my-3">
        <Link
          href={"https://substack.com/"}
          target="_blank"
          className="flex gap-2 font-medium items-center border border-gray-300 px-3 py-2 rounded-md bg-white"
        >
          <BookmarkIcon className="h-5 text-orange-600" /> Publish on Substack
        </Link>
        <div className="flex gap-2 cursor-pointer font-medium items-center border border-gray-300 px-3 py-2 rounded-md bg-white">
          <CursorArrowRippleIcon className="h-6 text-gray-700" /> Get the app
        </div>
      </div>
      <p className="mt-5">
        <span className="underline cursor-pointer">Substack</span> is the home
        for great writing
      </p>
    </footer>
  );
};

export default Footer;
