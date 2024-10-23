import React from 'react'

const Banner = () => {
  return (
    <div className='bg-cover bg-no-repeat rounded-3xl mf:w-full h-full md:h-[35.5rem] mb-10' 
    style={{backgroundImage:'url(https://i.ibb.co.com/YRHFCj0/chefs-table-bg.png)'}}>
        <div className='w-9/12 mx-auto flex flex-col justify-center items-center h-full space-y-6 py-4 text-center '>
            <h1 className='text-white md:text-[3.25rem] font-bold text-center'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-[18px] text-white text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className=' space-x-2 md:space-x-8'>
                <button className='btn bg-[#0BE58A] border-none outline-none'><a href="">Explore Now</a></button>
                <button className='btn bg-transparent  text-white '><a href="">Our Feedback</a></button>
            </div>
        </div>
    </div>
  )
}

export default Banner
