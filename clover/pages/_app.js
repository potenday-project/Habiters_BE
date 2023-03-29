import Layout from "../components/layout";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Router } from "next/router";
const MyApp = ({ session, Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
  }, []);
  return (
    <SessionProvider session={session}>
      <Layout>
        {loading ? <Loading></Loading> : <Component {...pageProps} />}
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
