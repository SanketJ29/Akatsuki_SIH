import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";
import { toast } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("User Registered Successfully");
        console.log(userCredential);
      })
      .catch((error) => {
        toast.error("Error with user registration");
        console.log(error);
      });
  };

  return (
    <div className="text-white bg-gray-900 h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full max-w-[100px]">
        <form
          className="max-w-[100px] w-full mx-auto rounded-lg items-center"
          onSubmit={registerHandler}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Register
          </h2>
          <div className="flex flex-col text-gray-500 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-500 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-400 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="w-full my-5 py-2 bg-[#FF3465] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-white font-bold rounded-lg"
            type="submit"
          >
            Register
          </button>
          <AuthDetails />
        </form>
      </div>
    </div>
  );
};

export default Register;
