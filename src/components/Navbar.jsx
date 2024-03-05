import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

// logo image
import logo from "../assets/logo.png"

const Navbar = () => {
  const [toggle,setToggle] = useState(true)
  return (
    <div className='containerr flex justify-between items-center bg-[white] h-[100px] w-full '>
      {/* logo  */}
        <div className='w-[150px] md:w-[200px] cursor-pointer'>
            <img src={logo} alt="logo" className='w-full'/>
        </div>

      {/* nav-items    */}
        <div className={`text-[#0a2050] md:block md:static md:w-full absolute top-[100px]  w-[50%] ${toggle ? 'left-0 backdrop-blur' : 'left-[-100%]'} transition-[1s] md:p-0 p-[20px]`}>
          <nav>
            <ul className='flex md:flex-row md:justify-end flex-col gap-10 md:text-[18px] lg:text-[22px] font-bold'>
              <li className='hover:text-[#e0e05f]'><a href="#">Home</a></li>
              <li className='hover:text-[#e0e05f]'><a href="#">About</a></li>
              <li className='hover:text-[#e0e05f]'><a href="#">Blog</a></li>
              <li className='hover:text-[#e0e05f]'><a href="#">Courses</a></li>
              <li className='hover:text-[#e0e05f]'><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>

      {/* bar icons  */}
        <div className='md:hidden block- text-[25px]' onClick={()=>setToggle(!toggle)}>
          {toggle ? <span><MdOutlineCancel /></span> : <span><FaBars /></span>}
        </div>

    </div>
  )
}

export default Navbar