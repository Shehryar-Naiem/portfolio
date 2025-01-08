import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-md'>
      <nav className='flex justify-between items-center p-5 max-w-screen-xl mx-auto'>
        <div className='logo'>
          <h1 className='text-2xl font-bold'>Shehryar Naeem</h1>
        </div>
        <ul className='hidden md:flex space-x-8'>
          <li>
            <a
              href='#home'
              className='text-lg hover:bg-gray-700 px-4 py-2 rounded transition'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='text-lg hover:bg-gray-700 px-4 py-2 rounded transition'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='text-lg hover:bg-gray-700 px-4 py-2 rounded transition'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='text-lg hover:bg-gray-700 px-4 py-2 rounded transition'
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Optional Mobile Menu (hamburger) */}
        <div className='md:hidden'>
          <button className='text-2xl'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
