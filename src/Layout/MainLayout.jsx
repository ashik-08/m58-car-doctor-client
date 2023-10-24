import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;