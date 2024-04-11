import {Outlet} from "react-router-dom"
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Router = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Router;