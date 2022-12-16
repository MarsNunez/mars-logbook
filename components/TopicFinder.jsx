import SmallCard from "./SmallCard";
import Topicsbar from "./Topicsbar";

const TopicFinder = ({ archivePost }) => {
  return (
    <div
      className={`mb-4 ${
        archivePost ? "tablet:max-w-3xl" : "tablet:max-w-xl"
      } tablet:mx-auto`}
    >
      <Topicsbar />
      <div className="mt-4">
        <SmallCard archivePost={archivePost} />
        <SmallCard archivePost={archivePost} />
        <SmallCard archivePost={archivePost} />
        <SmallCard archivePost={archivePost} />
      </div>
    </div>
  );
};

export default TopicFinder;
