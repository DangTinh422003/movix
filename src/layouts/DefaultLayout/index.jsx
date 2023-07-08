import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default DefaultLayout;
