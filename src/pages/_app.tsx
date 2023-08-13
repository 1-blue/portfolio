import type { AppProps } from "next/app";

import "@src/css/tailwindcss.css";
import "@src/css/scrollbar.css";
import "@src/css/font.css";

import Layout from "@src/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
