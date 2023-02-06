import type { AppProps } from 'next/app';
import "../styles/globals.css";
import dynamic from "next/dynamic";
const App=({ Component, pageProps }: AppProps)=> {
  return (
  <div>
   <head>
    <title>CodeX</title>
   </head>
  <Component {...pageProps} />
  </div>);
}
export default dynamic (() => Promise.resolve(App), {ssr: false})