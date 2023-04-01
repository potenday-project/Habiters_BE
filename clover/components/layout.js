import Navbar from "./Nav/navbar";
import Footer from "./Footer/footer";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  if (
    router.pathname == "/signin" ||
    router.pathname == "/signup" ||
    router.pathname == "/"
  )
    return (
      <>
        <main>{children}</main>
      </>
    );
  else {
    return (
      <div style={{ height: "100vh" }}>
        <div
          style={{
            position: "relative",
            minHeight: "100%",
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    );
  }
};
export default Layout;
