import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

interface DefaultLayoutProps {
  children: JSX.Element;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main-container">
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
}
