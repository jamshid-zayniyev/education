import React from 'react'
import back_img from "../assets/signup.jpg"


const Register = () => {
  return (
    <div className='h-[100vh] relative w-full parda'>
        <img src={back_img} alt="back_img"  className='absolute top-0 left-0 w-full h-[100%]'/>
        <div className='absolute top-0'>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <h2 className='capitalize'>Register to Get it</h2>
                <div className='flex justify-center gap-5'>
                    <p className='p-5 text-[white] backdrop-blur text-center'>
                        <span>18</span>
                        <p>Days</p>
                    </p>
                    <p className='p-5 text-[white] backdrop-blur text-center'>
                        <span>23</span>
                        <p>Hours</p>
                    </p>
                    <p className='p-5 text-[white] backdrop-blur text-center'>
                        <span>06</span>
                        <p>Mins</p>
                    </p>
                    <p className='p-5 text-[white] backdrop-blur text-center'>
                        <span>58</span>
                        <p>Secs</p>
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Register