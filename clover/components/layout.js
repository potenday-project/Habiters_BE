import Navbar from "./Nav/navbar";
import Footer from "./Footer/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
