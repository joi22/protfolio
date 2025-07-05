import React from 'react'

const Home = () => {

  const projects = Array(6).fill({
    title: "Website Coding",
    stack: "(HTML, CSS, JS)",
    image: "/sample-project.png", // Replace with actual image path
    link: "#",
  });

  return (
    <>
      <section class=" body-font">
        <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-r from-[#7F1D8D] to-[#5bc7fb] bg-clip-text text-transparent">
              Hi, I'm Dev<br class="hidden lg:inline-block " />
              Shopify & React.js Developer
            </h1>
            <p class="mb-8 leading-relaxed max-w-lg">
              I craft custom web applications and Shopify experiences using the MERN stack. Passionate about clean code, performance, and UI design.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg">
                View Portfolio
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="./media/1.png" />
          </div>
        </div>
        <hr className='text-[#0b0f1a]' />
      </section>
      <section className="min-h-screen  py-10 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#7F1D8D] to-[#5bc7fb] bg-clip-text text-transparent mb-10">MY SERVICES</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Website Development */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-lg">
              <div className="bg-[#14141c] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-white">Web App Development</span>
                </h3>
                <p className="text-gray-300">
                  I build custom web applications tailored to your business using modern frameworks and scalable solutions.

                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-lg">
              <div className="bg-[#14141c] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-white">Wordpress Development</span>
                </h3>
                <p className="text-gray-300">
                  I develop and customize WordPress websites that are easy to manage, SEO-friendly, and responsive.

                </p>
              </div>
            </div>

            {/* WordPress Development (on left column only) */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-lg">
              <div className="bg-[#14141c] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-white">Shopify Store Development</span>
                </h3>
                <p className="text-gray-300">
                  I create and customize Shopify stores that are optimized for performance, sales, and branding.

                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-lg">
              <div className="bg-[#14141c] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                   <span className="text-white">Shopify App Development</span>
                </h3>
                <p className="text-gray-300">
                  I build private and public Shopify apps to extend store functionality and integrate business workflows.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-lg">
              <div className="bg-[#14141c] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                   <span className="text-white">Website Development</span>
                </h3>
                <p className="text-gray-300">
                  I build private and public Shopify apps to extend store functionality and integrate business workflows.
                </p>
              </div>
            </div>

            {/* Empty div to preserve grid layout */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>
      <section className='min-h-screen  py-10 px-4 text-white'>
        <div className="min-h-screen relative text-white px-6 ">
          {/* Gradient Text Title */}
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 mb-12 text-center">
            PORTFOLIO
          </h2>

          {/* Pattern Background */}
          <div className="absolute inset-0 -z-10">
            <svg
              className="w-full h-full opacity-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 L100 100 M100 0 L0 100"
                stroke="#aa00ff"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition-transform"
              >
                <img
                  src={project.image}
                  alt="Project preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-[#0f172a]">
                  <p className="text-center text-lg font-semibold">
                    {project.title}
                  </p>
                  <p className="text-center text-sm text-gray-400">
                    {project.stack}
                  </p>
                  <div className="text-right mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-white hover:text-blue-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt="Project preview"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-[#0f172a]">
              <p className="text-center text-lg font-semibold">
                {project.title}
              </p>
              <p className="text-center text-sm text-gray-400">
                {project.stack}
              </p>
              <div className="text-right mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      </section>
    </>)
}

export default Home