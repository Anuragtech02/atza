import { Navbar, Footer } from "../components";
import clsx from "clsx";

const MainLayout = ({ children, classes = [] }) => {
  return (
    <>
      <Navbar />
      <main className={clsx(classes)}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
