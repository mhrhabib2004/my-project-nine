import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { RiUserLocationFill } from "react-icons/ri";




const Register = () => {
    const { createUser,updateUserProfile } = useContext(AuthContext);
    const [success,setsuccess]=useState('');
    const [RegistrationError,setRegistrationError]=useState('');
    const [showPassword,setshowpassword]=useState(false);

    const location= useLocation();

    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name=form.get('name');
        const email= form.get('email');
        const photo= form.get('photo')
        const password = form.get('password');
        console.log(name,email,password,photo);
        

      if (password.length < 6){
        setRegistrationError('Enter 6 or more password');
        return;
        
      }

      else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)){
        setRegistrationError('You need to add one uppercase and one lowarcase word ');
        return;
      }

    // recet error
    setRegistrationError('');
    setsuccess('');

        createUser(email,password)
        .then(result=>{
            navigate(location?.state ? location.state : "/");
            updateUserProfile(name,photo)
            .then(()=>{
                console.log(result.user)
                alert('Your Registration successfull');
                return;

            })
           
            
        })
        .catch(error=>{
            alert('You already Registred')
        })
    }
    // crate user
   
    return (
        

        <div>
            <Helmet><title>Home Press || Register</title></Helmet>
            
           
            <div className="hero min-h-screen bg-base-200 mt-7 bg-no-repeat bg-cover bg-center  rounded-xl" style={{ backgroundImage: 'url(https://cdn.photoroom.com/v1/assets-cached.jpg?path=backgrounds_v3/black/Photoroom_black_background_extremely_fine_texture_only_black_co_c3ee01bd-a082-44ff-b184-e338a13b2ffa.jpg)' }}>
            
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        
                    </div>
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center text-red-700 mt-1">Register now!</h1>
                    <br />
                    <hr />
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                               <div className="relative ">
                               <input type={showPassword ?"text" :"password"} 
                                name="password" 
                                placeholder="password" 
                                className="input input-bordered w-full" 
                                required />
                                <span className="absolute top-3 right-2" onClick={()=>setshowpassword(!showPassword)}>
                                    {
                                        showPassword ?<FaEyeSlash/>:<FaEye />
                                    }
                                </span>
                               </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>If you have an account? <Link to={"/Login"} className="btn btn-link">Login</Link></p>
                            {
                            RegistrationError && <p className="text-sm text-red-500">{RegistrationError}</p>
                        }
                        
                        
                        
                        </form>
                       
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Register;