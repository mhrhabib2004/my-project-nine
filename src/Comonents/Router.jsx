import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";



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