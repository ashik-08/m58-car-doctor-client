import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <section>
      <div className="container mx-auto px-2">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default MainLayout;
