import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
                <img 
                className='w-40 object-contain cursor-pointer'
                src="https://media.istockphoto.com/vectors/mountain-icon-vector-id841404182?k=20&m=841404182&s=612x612&w=0&h=V9HOMDJMwf3Q8fYvCz8K1_rw8OLdTIXQ3vjS9qn4XNM=" alt="adventure"/>   
            </Link>

            <div className='hidden md:inline-flex items-center space-x-5'>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className='text-white bg-green-700 px-4 py-1 rounded-full'>Follow</h3>
            </div>
            
        </div>
        <div className='flex items-center space-x-5 text-green-700'>
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 rounded-full border-green-700'>Get Started</h3>
        </div>
    </header>
  )
}

export default Header