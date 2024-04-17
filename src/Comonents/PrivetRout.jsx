import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import {Navigate,useLocation} from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location= useLocation();
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>;
    }

    if(user){
        return children;

    }
    return <Navigate state={location.pathname} to="/Login"></Navigate>
};

export default PrivetRout;