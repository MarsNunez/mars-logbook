import Layout from "../hoc/Layout";
import TopicFinder from "../components/TopicFinder";

const Archive = () => {
  return (
    <Layout current="archive">
      <div className="mt-5 mb-12">
        <TopicFinder archivePost={true} />
      </div>
    </Layout>
  );
};

export default Archive;
