import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import HeaderStyle3 from "../Components/Header/HeaderStyle3";

const Layout3 = () => {
    return (
        <div className="main-page-area3">
            <HeaderStyle3></HeaderStyle3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout3;