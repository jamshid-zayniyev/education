import React from 'react'
import back_img from "../assets/signup.jpg"
import Form from './Form'


const Register = () => {
  return (
    <div className='h-[100vh] relative w-full parda'>
        <img src={back_img} alt="back_img"  className='absolute top-0 left-0 w-full h-[100%]'/>
        <div className='absolute top-0 left-0 w-full flex lg:flex-row flex-col  h-[100vh] justify-center md:gap-0 gap-10 md:justify-around items-center z-10'>
        <div>
            <div className='text-[white] text-center md:text-left'>
                <p className='md:text-[20px] text-[18px]'>Get 100 Online Courses for free</p>
                <h2 className='capitalize text-[30px] md:text-[40px] font-[900]'>Register to Get it</h2>
                <div className='flex justify-center gap-5 mt-[40px]'>
                    <p className='p-3 md:p-5 text-[white]  backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>18</span>
                        <p>Days</p>
                    </p>
                    <p className='p-3 md:p-5 text-[white] backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>23</span>
                        <p>Hours</p>
                    </p>
                    <p className='p-3 md:p-5 text-[white] backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>06</span>
                        <p>Mins</p>
                    </p>
                    <p className='p-3 md:p-5 text-[white] backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>58</span>
                        <p>Secs</p>
                    </p>
                </div>
            </div>
            <div></div>
        </div>
        <div>
            <Form/>
        </div>
        </div>
       
    </div>
  )
}

export default Register