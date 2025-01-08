import React from 'react'

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Hero Section */}
      <section
        id='home'
        className='h-screen bg-blue-800 text-white flex flex-col justify-center items-center text-center px-6'
      >
        <h1 className='text-5xl font-extrabold mb-4'>
          Hello, I'm Your Shehryar Naeem
        </h1>
        <p className='text-xl mb-6'>
          I'm a passionate web developer with a love for creating interactive
          web experiences.
        </p>
        <div className='flex gap-4'>
          <a
            href='#projects'
            className='bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105'
          >
            Projects
          </a>
          <a
            href='https://www.linkedin.com/in/shehryar-n-64014419a/'
            target='blank'
            className='bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105'
          >
            LinkdIn
          </a>
          <a
            href='https://github.com/Shehryar-Naiem'
            target='blank'
            className='bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105'
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id='about' className='py-20 px-6 text-center bg-white'>
        <h2 className='text-3xl font-bold mb-8'>About Me</h2>
        <div className='max-w-screen-md mx-auto'>
          <p className='text-lg mb-4'>
            I’m a web developer with a passion for building sleek, fast, and
            user-friendly websites and applications. With experience in
            front-end and back-end technologies, I strive to create seamless
            digital experiences that help people connect and interact with the
            world in innovative ways.
          </p>
          <p className='text-lg'>
            When I’m not coding, you can find me exploring new technologies,
            traveling, or experimenting with creative projects.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 bg-gray-200'>
        <h2 className='text-3xl font-bold text-center mb-8'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src='https://via.placeholder.com/350'
              alt='Project 1'
              className='w-full h-56 object-cover mb-4 rounded'
            />
            <h3 className='text-xl font-semibold mb-2'>Project 1</h3>
            <p className='text-gray-600 mb-4'>
              Description of project 1. Briefly talk about the technology stack
              and the problem solved.
            </p>
            <a href='#project1' className='text-blue-500 hover:underline'>
              View Details
            </a>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src='https://via.placeholder.com/350'
              alt='Project 2'
              className='w-full h-56 object-cover mb-4 rounded'
            />
            <h3 className='text-xl font-semibold mb-2'>Project 2</h3>
            <p className='text-gray-600 mb-4'>
              Description of project 2. Showcase the impact and technologies
              used.
            </p>
            <a href='#project2' className='text-blue-500 hover:underline'>
              View Details
            </a>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src='https://via.placeholder.com/350'
              alt='Project 3'
              className='w-full h-56 object-cover mb-4 rounded'
            />
            <h3 className='text-xl font-semibold mb-2'>Project 3</h3>
            <p className='text-gray-600 mb-4'>
              Description of project 3. Highlight key achievements and your role
              in the project.
            </p>
            <a href='#project3' className='text-blue-500 hover:underline'>
              View Details
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-blue-800 text-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>Contact Me</h2>
        <div className='max-w-md mx-auto text-center'>
          <p className='text-lg mb-4'>
            I'm always open to discussing new projects, opportunities, or simply
            connecting!
          </p>
          <a
            href='mailto:shehryar033339@gmail.com'
            className='bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105'
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
