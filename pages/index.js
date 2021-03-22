import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LanguageSwitch from "@components/LanguageSwitch";

export default function Home({ title }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LanguageSwitch />
        <Header title={title} />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  const title = locale === "nl" ? "Hallo vreemdeling" : "Hello stranger";

  return {
    props: {
      title,
    },
  };
};
