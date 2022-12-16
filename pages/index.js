import Card from "../components/Card";
import More from "../components/More";
import TopicFinder from "../components/TopicFinder";
import Layout from "../hoc/Layout";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <Card />
        <TopicFinder />
        <div className="tablet:max-w-xl tablet:mx-auto">
          <Link
            href={"/archive"}
            className="flex items-center text-sm font-light px-4 cursor-pointer mb-9 text-gray-800"
          >
            See all <ChevronRightIcon className="h-3" />
          </Link>
        </div>
        <More />
      </div>
    </Layout>
  );
}
