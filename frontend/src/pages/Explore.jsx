import React from 'react';
import Navbar from '../components/Navbar';
const Explore = () => {
    return (
      <div>
        <Navbar />
        <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-4xl font-medium title-font mb-6 text-green-400">DISCOVER TREE SPECIES</h1>
            <p class="text-xl max-w-7xl mx-auto leading-relaxed text-base">Unlock the world of trees through our image analytics tool, enabling you to explore and identify a variety of tree species with ease. From majestic oaks to delicate maples, our platform provides detailed insights into the forest's green tapestry, fostering a deeper appreciation for nature's wonders.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.linkpicture.com/q/1.Banyan-tree.png"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 class="tracking-widest text-lg title-font font-medium text-green-400 mb-1">BANYAN TREE</h1>
                  <h1 class="title-font text-lg mb-3">A majestic tree with extensive aerial roots, known for its sprawling canopy and cultural significance.</h1>
                  <p class="leading-relaxed">Average Height: 20-30 meters</p>
                  <p class="leading-relaxed">Average Girth: 3-5 meters</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.linkpicture.com/q/images_352.jpeg"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 class="tracking-widest text-lg title-font font-medium text-green-400 mb-1">RED SPRUCE</h1>
                  <h1 class="title-font text-lg mb-3">A coniferous tree with needle-like leaves, valued for its timber and used in construction.</h1>
                  <p class="leading-relaxed">Average Height: 20-40 meters</p>
                  <p class="leading-relaxed">Average Girth: 0.3-0.6 meters</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.linkpicture.com/q/15377475-tree-with-horizontal-branches-in-the-alley-in-the-park-on-a-sunny-day.jpg"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h1 class="tracking-widest text-lg title-font font-medium text-green-400 mb-1">WEEPING WILLOW</h1>
                  <h1 class="title-font text-lg mb-3">A deciduous tree known for its distinctive long, drooping branches and graceful appearance.</h1>
                  <p class="leading-relaxed">Average Height: 10-15 meters</p>
                  <p class="leading-relaxed">Average Girth: 0.3-0.6 meters</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.linkpicture.com/q/How-to-Grow-Pecan-Trees-Feature.jpg"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h1 class="tracking-widest text-lg title-font font-medium text-green-400 mb-1">SUGAR MAPLE</h1>
                  <h1 class="title-font text-lg mb-3">A hardwood tree valued for its sap, which is used to make maple syrup.</h1>
                  <p class="leading-relaxed">Average Height: 18-27 meters</p>
                  <p class="leading-relaxed">Average Girth: 0.6-1.2 meters</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.linkpicture.com/q/download_141.jpeg"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h1 class="tracking-widest text-lg title-font font-medium text-green-400 mb-1">SYCAMORE</h1>
                  <h1 class="title-font text-lg mb-3">A deciduous tree with large, lobed leaves and striking exfoliating bark.</h1>
                  <p class="leading-relaxed">Average Height: 20-35 meters</p>
                  <p class="leading-relaxed">Average Girth: 0.9-1.5 meters</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.linkpicture.com/q/How-to-Grow-Maple-Trees-Feature.jpg"/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h1 class="tracking-widest text-lg title-font font-medium text-green-400 mb-1">JAPANESE MAPLE</h1>
                  <h1 class="title-font text-lg mb-3">Japanese Maple is known for stunning foliage, with leaves that turn vibrant shades in the fall.</h1>
                  <p class="leading-relaxed">Average Height: 2-10 meters</p>
                  <p class="leading-relaxed">Average Girth: 1-3 meters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Explore;
