import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 mt-16'>
      <div className='max-w-screen-xl mx-auto px-6'>
        {/* Social Media Links */}
        <div className='flex justify-center space-x-6 mb-6'>
          <a
            href='https://www.linkedin.com/in/shehryar-n-64014419a/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:text-yellow-500 transition'
          >
            LinkdIn
          </a>
          <a
            href='https://github.com/Shehryar-Naiem'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:text-yellow-500 transition'
          >
            Github
          </a>
          <a
            href='mailto:shehryar033339@gmail.com'
            className='text-xl hover:text-yellow-500 transition'
          >
            Email
          </a>
        </div>

        {/* Copyright Section */}
        <div className='text-center text-lg'>
          <p>
            &copy; {new Date().getFullYear()} Shehrayr Naeem. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
