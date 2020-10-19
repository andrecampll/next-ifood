import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ifood</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
