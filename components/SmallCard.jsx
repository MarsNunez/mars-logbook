import { ShareIcon } from "@heroicons/react/24/outline";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const SmallCard = ({ archivePost }) => {
  return (
    <Link href={"/archive/123"}>
      <div
        className={`hover:bg-gray-100 cursor-pointer px-4 py-4 ${
          archivePost && "flex gap-6"
        }`}
      >
        {archivePost && (
          <div className="hidden sm:block h-32 w-80 max-w-xs">
            <img
              src="/img/octo.jpeg"
              alt="post-image"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 ">
            When they used to ration food ft. 雪衣豆沙
          </h3>
          <p className="text-md font-light summary leading-6 text-gray-500">
            <PuzzlePieceIcon className="h-5 w-5 text-gray-700 inline mr-1" />
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a
        enim tortor. Duis dapibus pretium tellus. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Fusce ut pulvinar justo. Curabitur eros
        enim, mattis faucibus faucibus eu, vestibulum ut mi. Morbi dolor libero,
        ornare id neque nec, interdum fermentum leo. Integer at placerat tortor.
        Sed eleifend quam at fermentum pulvinar. Pellentesque ultricies, mi quis
        blandit gravida, urna arcu varius diam, ac lacinia lacus massa vitae
        purus. Fusce maximus vitae diam sit amet aliquam. Vivamus condimentum
        gravida purus, sed commodo libero fermentum nec. Morbi sit amet
        hendrerit augue. Donec vitae ultrices odio. Praesent eleifend lacus sed
        sapien bibendum tincidunt. Donec rutrum eu diam id ultricies. In nec
        massa nec augue feugiat ullamcorper.`.slice(0, 139) + "..."}
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

export default SmallCard;
