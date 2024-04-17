import {Outlet} from "react-router-dom"
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";


const Router = () => {
    return (
        <div className="p-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Router;