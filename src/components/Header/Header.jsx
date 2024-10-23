import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4'>
        <h1 className='text-gray-800 font-bold text-3xl'>Chef&apos;s Table</h1>
        {/* menu start */}
        <ul className='flex gap-6 text-gray-600 font-semibold text-base'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Recipes</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Search</a>
            </li>
        </ul>
        {/* menu end */}
        <div className='flex justify-between items-center relative gap-3 '>
            {/*search  */}
            <div>
                <input className='bg-gray-300 px-4 py-2 rounded-xl outline-none' placeholder='Search' type="text" name="" id="" />
            </div>
            {/* search */}

            <div className='bg-green-400 flex items-center justify-center rounded-full w-12 h-12'>
                <i className='fa-regular fa-user-circle text-3xl'></i>
            </div>

        </div>
    </div>
  )
}

export default Header
