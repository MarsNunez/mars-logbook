import {
  CameraIcon,
  ChevronRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import Layout from "../../hoc/Layout";
import TopicFinder from "../../components/TopicFinder";
import Link from "next/link";
import helperIcons from "../../helpers/helperIcons";

const Post = () => {
  return (
    <Layout current={"archive-post"} title={"running"}>
      <div className="pt-4 text-gray-800">
        <div className="mx-auto max-w-3xl">
          <h2 className="px-4 font-semibold text-4xl">
            Running away from the covids
          </h2>
          <div className="px-4 flex justify-between my-5">
            <div className="flex items-center gap-3">
              <img
                src="/img/mars.png"
                alt="profile-pic"
                className="h-9 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">Mars Nunez</p>
                <p className="font-light text-gray-500 text-sm">Dec 8</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {helperIcons("books")}
              <p className="font-semibold text-2xl">Life</p>
            </div>
          </div>
          <div
            className="px-4 font-serif text-lg tracking-wider font-thin text-gray-700 pb-10 border-b border-gray-300
          first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec neque non ex finibus consectetur ac nec eros. Ut non dapibus
              mi. Vestibulum ac lorem ipsum. Mauris vel sem efficitur, mollis
              ante eget, scelerisque metus. Quisque vel dolor tempor, elementum
              ante vitae, pellentesque ante. Integer mattis nisi vitae neque
              bibendum, sit amet venenatis nisi condimentum. Suspendisse vel mi
              ligula. Duis interdum pulvinar nibh a tempus. Praesent feugiat
              pharetra nibh. Duis vulputate orci eu metus molestie, ut ultricies
              nisi volutpat. Aenean a metus lectus. Proin eu lectus eu nunc
              elementum rhoncus quis sed mi. Nulla sed odio viverra, pulvinar
              velit a, volutpat tellus. Fusce ullamcorper nulla nec libero
              ultrices, et lacinia lorem vehicula. Fusce ante nisi, vulputate a
              nisl in, mattis bibendum est. Vivamus velit elit, ultrices sodales
              sodales nec, faucibus in lorem. Suspendisse fringilla posuere leo
              ac accumsan. Praesent vitae commodo turpis. Vivamus non vehicula
              ante. Nam maximus congue turpis, non vulputate ipsum lobortis
              aliquet. Proin sollicitudin, elit eu lacinia ullamcorper, turpis
              neque scelerisque sem, laoreet aliquet arcu leo vitae nisl. Proin
              porta nunc sed massa commodo dictum. Quisque lacinia, justo a
              fringilla vulputate, purus diam imperdiet odio, vel ornare nisi
              felis vitae leo. In non gravida est. Nullam nec tincidunt odio.
              Vestibulum blandit tristique elementum. Fusce id feugiat diam,
              eget hendrerit velit. Proin sed euismod turpis. Maecenas ultricies
              tincidunt elit, ut maximus eros convallis vitae. Sed in finibus
              diam. Cras vestibulum eros faucibus, cursus lectus vitae, tempus
              tellus. Integer eget molestie nibh. Aenean scelerisque urna eget
              lacus porttitor tristique. Aliquam interdum nec turpis sed
              interdum. Pellentesque faucibus placerat dolor, condimentum
              pellentesque elit rutrum quis. Fusce id molestie augue. Aliquam eu
              magna eu risus semper sagittis a in lacus. Vestibulum egestas
              mauris eu nisl auctor, id molestie libero malesuada. Donec neque
              mi, porta a euismod in, aliquet in lectus.
            </p>
          </div>
        </div>
        <TopicFinder archivePost={true} />
        <Link
          href={"/archive"}
          className="flex items-center text-sm font-light px-4 cursor-pointer mb-9 text-gray-800 max-w-3xl mx-auto"
        >
          See all <ChevronRightIcon className="h-3" />
        </Link>
      </div>
      <div className="flex flex-col bg-gradient-to-r from-orange-500 to-red-500 text-gray-700 items-center py-11 sm:py-14">
        <h3 className="font-semibold text-2xl">Ready for more?</h3>
        <div className="flex mt-5">
          <input
            type="email"
            placeholder="Type your email..."
            className="font-light outline-none border-white border-l border-t border-b rounded-tl-md rounded-bl-md py-2 px-3 w-52"
          />
          <a
            href="https://www.youtube.com/channel/UC4XpWwLaIyuxYUB3LGV8IjQ"
            target="_blank"
            className="bg-transparent border border-white h-fit px-5 py-3 rounded-tr-md rounded-br-md font-semibold text-sm"
          >
            Subscribe
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
