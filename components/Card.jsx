import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/archive/123"}>
      <div className="hover:bg-gray-100 tablet:flex tablet:p-6">
        <img
          src="img/default.jpeg"
          alt="main post image"
          className="h-60 w-full tablet:h-72 object-cover tablet:max-w-md"
        />
        <div className="text-gray-800 py-5 px-4">
          <h2 className="font-semibold text-3xl">
            Runnign away from the covids
          </h2>
          <p className="text-lg font-light mt-2 summary leading-6">
            <PuzzlePieceIcon className="h-6 w-6 text-gray-800 inline mr-2" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a enim tortor. Duis dapibus pretium tellus. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut pulvinar justo.
            Curabitur eros enim, mattis faucibus faucibus eu, vestibulum ut mi.
            Morbi dolor libero, ornare id neque nec, interdum fermentum leo.
            Integer at placerat tortor. Sed eleifend quam at fermentum pulvinar.
            Pellentesque ultricies, mi quis blandit gravida, urna arcu varius
            diam, ac lacinia lacus massa vitae purus. Fusce maximus vitae diam
            sit amet aliquam. Vivamus condimentum gravida purus, sed commodo
            libero fermentum nec. Morbi sit amet hendrerit augue. Donec vitae
            ultrices odio. Praesent eleifend lacus sed sapien bibendum
            tincidunt. Donec rutrum eu diam id ultricies. In nec massa nec augue
            feugiat ullamcorper.
          </p>
          <div className="text-gray-600 uppercase font-light text-xs mt-3  tracking-wider">
            <p>
              Mars Nunez - {"Books"} - Dec 06 2022{" "}
              <ShareIcon className="w-4 text-gray-600 inline mr-2 ml-1" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
