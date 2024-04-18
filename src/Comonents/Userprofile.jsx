import { Link } from "react-router-dom";
import { useContext } from "react";
import auth from "../firebase.config";
import { AuthContext } from "../Provaider/AuthProvaider";
import { Helmet } from "react-helmet-async";

const Userprofile = () => {
    const {user,loading}=useContext(AuthContext);
    // console.log(user);
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>;
     }
    return (
    <div data-aos="zoom-in-left" className="h-96 mt-7 rounded-xl" style={{ backgroundImage: 'url(https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
        <div className="grid justify-center" >
            <Helmet><title>Home Press || User Profile</title></Helmet>
            <div data-aos="zoom-in-up"className=" mt-7 card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={user?.photoURL} alt="Shoes" className="rounded-xl h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name : {user?.displayName}</h2>
                <p>Email : {user?.email}</p>
                <div className="card-actions">
                    <Link to={"/"}><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Userprofile;