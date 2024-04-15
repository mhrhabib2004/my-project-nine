import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { FaGoogle,FaGithub, FaEyeSlash } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import auth from "../firebase.config";
import { FaEye } from "react-icons/fa6";

const Login = () => {
    const { signIn,provider,gitProvider } = useContext(AuthContext);
    const [showPassword,setshowpassword]=useState(false);
    const handelLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then()
            .catch()
    }

    const handelGooglelogin=()=>{
        signInWithPopup(auth,provider)
        .then()
        .catch()
    }

    const handelGitHubLogin =()=>{
        signInWithPopup(auth,gitProvider)
        .then()
        .catch()
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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