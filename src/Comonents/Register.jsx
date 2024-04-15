import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { FaEye,FaEyeSlash } from "react-icons/fa";




const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [success,setsuccess]=useState('');
    const [RegistrationError,setRegistrationError]=useState('');
    const [showPassword,setshowpassword]=useState(false);

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
            console.log(result.user)
            alert('Your Registration successfull');
            return;
        
       
            
        })
        .catch(error=>{
            alert('You already Registred')
        })
    }
    // crate user
   
    return (
        

        <div>
            
           
            <div className="hero min-h-screen bg-base-200">
            
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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