import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children, current, title }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - by Mars Nunez` : "Mars Logbook | Mars Nunez"}
        </title>
      </Head>
      <Navbar current={current} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
