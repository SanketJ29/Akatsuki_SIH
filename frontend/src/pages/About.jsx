import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div class="container px-5 py-8 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-4xl text-green-400 tracking-widest font-medium title-font mb-9">
              SERVICES OVERVIEW
            </h1>

            <p class="text-xl font-medium title-font max-w-7xl mx-auto leading-loose">
              We, Team Akatsuki, are on a mission to revolutionize the way
              forest land diversion is managed. Our innovative project harnesses
              the power of image analytics to provide essential insights into
              forest ecosystems. With our cutting-edge technology, you can
              predict tree species and count trees with precision, facilitating
              responsible land development. Explore the rich biodiversity of
              forests effortlessly and identify various tree species. Join us in
              our endeavor to protect our environment while promoting
              sustainable development.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <Link to="/predict">
                    <h2 class="text-green-400 text-2xl title-font font-medium hover:text-green-200">
                      PREDICTION
                    </h2>
                  </Link>
                </div>
                <div class="flex-grow">
                  <p class="text-lg leading-relaxed text-base">
                    Experience the power of prediction with our advanced image
                    analytics tool. Simply upload your aerial image, and let our
                    technology work its magic. We'll not only accurately count
                    the trees but also identify their species, providing you
                    with essential insights for responsible land development.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/2">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <Link to="/explore">
                    <h2 class="text-green-400 text-2xl title-font font-medium hover:text-green-200">
                      EXPLORE
                    </h2>
                  </Link>
                </div>
                <div class="flex-grow">
                  <p class="text-lg leading-relaxed text-base">
                    Experience the wonders of nature through our Explore
                    feature. View an array of tree species with detailed
                    descriptions, including average height and girth. Dive into
                    the fascinating world of trees with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
