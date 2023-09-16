import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CodeBlockWithCopyButton from "../components/CodeBlockWithCopyButton";

const APIPage = () => {
  const exampleCode = `response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)`;
  return (
    <div>
      <Navbar />
      <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div class="container px-20 py-8 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center mb-20 items-center">
            <h1 class="text-4xl text-green-400 tracking-widest font-medium title-font mb-9">
              Tree API
            </h1>
            <button
              className="mt-2 bg-green-600 hover:bg-green-300 text-white py-2 px-4 rounded-full focus:outline-none items-center "
              style={{ width: "100%", maxWidth: "150px" }}
            >
              Get API Key
            </button>
            <div className="float-left ">
              <h2 class="text-2xl text-green-400 font-medium title-font mb-9 mt-9 text-left">
                Sample Code
              </h2>
              <CodeBlockWithCopyButton code={exampleCode} />
            </div>

            <div>
              <h2 class="text-2xl text-green-400 font-medium title-font mb-9 mt-9 text-left">
                Endpoint Code
              </h2>
              <CodeBlockWithCopyButton code={exampleCode} />
            </div>

            <div>
              <h2 class="text-2xl text-green-400 font-medium title-font mb-9 mt-9 text-left">
                Response Code
              </h2>
              <CodeBlockWithCopyButton code={exampleCode} />
            </div>
          </div>
          {/* <div class="flex flex-wrap -m-4">
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
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default APIPage;
