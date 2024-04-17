import { Link,useLocation,useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { FaGoogle,FaGithub, FaEyeSlash } from "react-icons/fa";
import { signInWithPopup} from "firebase/auth";
import auth from "../firebase.config";
import { FaEye } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { signIn,provider,gitProvider,loading } = useContext(AuthContext);
    const [showPassword,setshowpassword]=useState(false);

    const location= useLocation();

    const navigate = useNavigate();

    console.log('location here',location)

    const handelLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result=>{
                console.log(result.user)

                // navigate to login
                navigate(location?.state ? location.state : "/");
            })
            .catch()
    }
    if(loading){
       return <span className="loading loading-spinner text-primary"></span>;
    }


   
    const handelGooglelogin=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            navigate(location?.state ? location.state : "/");
        })
        .catch()
    }

    const handelGitHubLogin =()=>{
        signInWithPopup(auth,gitProvider)
        .then(result=>{
            navigate(location?.state ? location.state : "/");
        })
        .catch()
    }
    return (
        <div>
            <Helmet><title>Home Press || Login</title></Helmet>
            
            <div className="hero min-h-screen bg-base-200 mt-7 rounded-xl" style={{ backgroundImage: 'url(https://homepress.stylemixthemes.com/wp-content/uploads/2019/03/office-5-1399x899.jpg)' }}>
                
                <div className="hero-content flex-col ">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center text-red-800 mt-1 font-bold">Login now!</h1>
                    
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                <input type={showPassword?"text":"password"}
                                 name="password"
                                  placeholder="password"
                                  
                                  className="input input-bordered w-full"
                                   required />
                                   <span className="absolute top-3 right-2" onClick={()=>setshowpassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye />}</span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an account? <Link to={"/Register"} className="btn btn-link">Register</Link></p>
                            < hr />
                            <div className="text-center">OR</div>
                            <hr />
                            <div className="space-x-2">
                                <button onClick={handelGooglelogin} className="btn btn-secondary "><FaGoogle /> GOOGLE</button>
                                <button onClick={handelGitHubLogin} className="btn btn-secondary "><FaGithub /> GIT HUB</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;