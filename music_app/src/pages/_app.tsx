import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default wrapper.withRedux(function App({
  Component,
  pageProps,
}: AppProps) {
  return <Component {...pageProps} />;
});
