import { Link } from "react-router-dom";
import { useContext } from "react";
import auth from "../firebase.config";
import { AuthContext } from "../Provaider/AuthProvaider";

const Userprofile = () => {
    const {user}=useContext(AuthContext);
    // console.log(user);
    return (

    
        <div className="grid justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name : {user?.displayName}</h2>
                <p>Email : {user?.email}</p>
                <div className="card-actions">
                    <Link to={"/Home"}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Userprofile;