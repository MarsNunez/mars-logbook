const More = () => {
  return (
    <div className="border-t border-gray-300 tablet:max-w-3xl tablet:mx-auto">
      <div className="px-4 pt-9 pb-14">
        <h2 className="font-duneRise uppercase cursor-default font-bold text-xs border-b pb-3">
          Mars Logbook
        </h2>
        <div className="flex mt-5">
          <input
            type="email"
            placeholder="Type your email..."
            className="font-light outline-none border-l border-t border-b rounded-tl-md rounded-bl-md py-1 px-2 w-72"
          />
          <a
            href="https://www.youtube.com/channel/UC4XpWwLaIyuxYUB3LGV8IjQ"
            target="_blank"
            className="bg-gradient-to-r from-orange-500 to-red-500 h-fit px-5 py-2 rounded-tr-md rounded-br-md cursor-pointer ease-out font-light text-sm"
          >
            Subscribe
          </a>
        </div>
        <ul className="flex flex-col font-light text-gray-800 text-sm mt-5 gap-4">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Archive</li>
          <li className="hover:underline cursor-pointer">Author</li>
          <li className="hover:underline cursor-pointer">Recommendations</li>
          <li className="hover:underline cursor-pointer">Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default More;
