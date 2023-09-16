import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            src="https://www.linkpicture.com/q/Screenshot_2023-09-14_200444-removebg-preview.png"
            width="24"
            height="24"
            className="w-12 h-10"
          />
          <span class="ml-3 text-xl">AKATSUKI</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="text-green-400 mr-5 hover:text-green-200">
            HOME
          </Link>
          <Link to="/about" class="text-green-400 mr-5 hover:text-green-200">
            ABOUT
          </Link>
          <Link to="/predict" class="text-green-400 mr-5 hover:text-green-200">
            PREDICT
          </Link>
          <Link to="/explore" class="text-green-400 mr-5 hover:text-green-200">
            EXPLORE
          </Link>
          <Link to="/apipage" class="text-green-400 mr-5 hover:text-green-200">
            API PAGE
          </Link>
          <Link to="/team" class="text-green-400 mr-5 hover:text-green-200">
            TEAM
          </Link>
        </nav>
        <Link to="/login">
          <button class="inline-flex text-white items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
            LOGIN
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
