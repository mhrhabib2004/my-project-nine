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
    <div data-aos="zoom-in-left" className="h-96 mt-7 bg-no-repeat bg-cover bg-center  rounded-xl" style={{ backgroundImage: 'url(https://www.veeforu.com/wp-content/uploads/2023/07/youtube-banner-background-futuristic-2048x1152-1-1024x576.jpg)' } }>
        <div className="grid justify-center" >
            <Helmet><title>Home Press || User Profile</title></Helmet>
            <div data-aos="zoom-in-up"className=" mt-7 card w-auto bg-base-100 shadow-xl">
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