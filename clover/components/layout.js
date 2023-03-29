import Navbar from "./Nav/navbar";
import Footer from "./Footer/footer";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname == "/signin" || router.pathname == "/signup")
    return (
      <>
        <main>{children}</main>
      </>
    );
  else {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
};
export default Layout;
