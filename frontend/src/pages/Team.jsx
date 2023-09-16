import React from 'react';
import Navbar from '../components/Navbar';
const Team = () => {
    return(
        <div>
            <Navbar/>
            <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-4xl font-medium title-font mb-6 text-green-400">OUR TEAM</h1>
      <p class="text-xl max-w-7xl mx-auto leading-loose text-base">We are Team Akatsuki, participating in the Smart India Hackathon (SIH). Our mission is to revolutionize forest land diversion through image analytics. Meet our talented members dedicated to sustainable development and environmental conservation.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" src="https://www.linkpicture.com/q/push_linkpic.jpeg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-xl text-green-400 mb-3">Pushkaraj Baradkar</h2>
            <h3 class="text-xl mb-2">Leader</h3>
            <p class="mb-4">Skills: React.js, Node.js, ML, Tailwind CSS</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" src="https://www.linkpicture.com/q/Picsart_22-09-18_21-25-05-453_2.jpg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-xl text-green-400 mb-2">Sanket Jaiswal</h2>
            <h3 class="text-lg mb-2">Frontend Developer</h3>
            <p class="mb-2">Skills: React.js, Tailwind CSS, Node.js, ML</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
      <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" src="https://www.linkpicture.com/q/omkar_linkpic_1.jpeg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-xl text-green-400 mb-2">Omkar Mahajan</h2>
            <h3 class="text-lg mb-2">ML Developer</h3>
            <p class="mb-2">Skills: ML, Deep learning, Node.js</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" src="https://www.linkpicture.com/q/vedansh_linkpic.jpeg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-xl text-green-400 mb-2">Vedansh Udhawani</h2>
            <h3 class="text-lg mb-2">ML Developer</h3>
            <p class="mb-2">Skills: ML, Deep learning, Node.js</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2 md:w-full text-center">
        <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 rounded-lg w-1/2 h-80 object-cover object-center mb-4" src="https://www.linkpicture.com/q/sanj_linkpic.jpeg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-xl text-green-400 mb-2">Sanjana Asrani</h2>
            <h3 class="text-lg mb-2">ML Developer</h3>
            <p class="mb-2">Skills: ML, Deep learning, Node.js</p>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2 md:w-full text-center">
        <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 rounded-lg w-1/2 h-80 object-cover object-center mb-4" src="https://www.linkpicture.com/q/yash_linkpic.jpeg"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-xl text-green-400 mb-2">Yash Sahane</h2>
            <h3 class="text-lg mb-2">Frontend Developer</h3>
            <p class="mb-2">Skills: React.js, Node.js, ML</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Team;
