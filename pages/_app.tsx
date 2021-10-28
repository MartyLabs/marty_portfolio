import "../styles/globals.css";
import type { AppProps } from "next/app";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

library.add(fab);

export default MyApp;
