import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className='w-full h-28 bg-[#C7F7FF] flex justify-between items-center text-[#63AED4] p-10'>
       <div>
       <h1> logo</h1>
        </div>
        <div className='flex gap-10'>
          <span>Home</span>
          <span>About</span>
          <span>Products</span>
          <span>Case Study</span>
          <span>Contact</span>
          <div>
          <button className='btn btn-outline btn-sm rounded-full text-xs text-white bg-[#2380B8] font-extralight '>
          BOOK NOW
        </button>
          </div>
        </div>
    </div>

  
    </div>
  )
}

export default Navbar