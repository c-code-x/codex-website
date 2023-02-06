import type { AppProps } from 'next/app';
import "../styles/globals.css";
import dynamic from "next/dynamic";
import {Router} from "next/router";
import {useEffect, useState} from "react";
import Preloader from "@/components/Preloader";
import Head from "next/head";
const App=({ Component, pageProps }: AppProps)=> {
   //  const [Loading, setLoading] = useState(false)
   //
   // useEffect(()=>{
   //     Router.events.on('routeChangeStart', (url)=>{
   //         setLoading(true)
   //     })
   //     Router.events.on('routeChangeComplete', (url)=>{
   //         setLoading(false)
   //     })
   // },[])
    return (
  <div>
      {/*{Loading && <Preloader/>}*/}
  <Component {...pageProps} />
  </div>);
}
export default App;