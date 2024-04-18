import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



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