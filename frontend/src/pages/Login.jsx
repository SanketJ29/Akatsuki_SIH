import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState(null);

  const loginHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.message("User Signed In Successfully");
        console.log(userCredential);
      })
      .catch((error) => {
        toast.error("Error with User Sign In");
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 h-screen max-w-[250px]">
        <div className="flex flex-col justify-center items-center max-w-[150px]">
          <form
            className="max-w-[300px] w-full mx-auto rounded-lg p-8 px-8"
            onSubmit={loginHandler}
          >
            <h2 className="text-4xl text-green-400 dark:text-white font-bold text-center">
              Login
            </h2>
            <div className="flex flex-col text-gray-500 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-500 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="w-full my-5 py-2 bg-[#3ac941] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-green-400 font-bold rounded-lg"
              type="submit"
            >
              Login
            </button>
            <Link to="/register">
              <button className="w-full my-5 py-2 mt-1 bg-[#FF3465] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-green-400 font-bold rounded-lg">
                Register
              </button>
            </Link>
          </form>
          <AuthDetails className="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
