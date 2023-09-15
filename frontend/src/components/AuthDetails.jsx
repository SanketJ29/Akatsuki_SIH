import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(authUser);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p className="text-white text-xl">{`Logged In as ${authUser.email}`}</p>
          <button
            className="w-full my-5 py-2 bg-[#FF3465] shadow-lg shadow-teal-800/50 hover:shadow-teal-500/40 text-white font-bold rounded-lg"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p className="text-white text-xl">Not Signed In</p>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
