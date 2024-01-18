import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import createGlobalStyle from "./styles/global";

createGlobalStyle();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>builder-next</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700;800&display=swap');`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
