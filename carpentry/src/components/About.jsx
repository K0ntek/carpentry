import React from 'react'
import Animation from './Animation'
import { IoPeopleSharp } from "react-icons/io5";
import Attributes from './Attributes';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div id='about'>
      <div className='w-full mx-auto grid md:grid-cols-2'>
        {/* <div className='w-3/4'>
            <img src="https://images.unsplash.com/photo-1560462931-04c235409a53?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about"  className=' aspect-square rounded-full'/>
        </div> */}
        <div>
          <Animation/>
        </div>
        <div>
          <div className=' space-y-7 w-3/4 mx-auto sticky top-[10%] py-12'>
          <div className=' flex ml-10'>
                <IoPeopleSharp className='text-4xl sm:text-5xl mr-2 text-[#292c1c] mt-1'/>
                <h1 className='text-4xl sm:text-5xl font-mont font-[200] text-[#292c1c]'> WHO ARE <span className=' font-[600] text-[#292c1c]'>WE</span> ?</h1>
            </div>
                  <p className=' font-inter text-2xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia atque, quas accusantium excepturi animi et ullam error voluptatibus dolorum. Et facere enim iure possimus? Amet quae, debitis, ea quidem vitae recusandae facilis veniam est pariatur commodi asperiores ad facere?</p>
                  
                  <Link to='offerWrapper' smooth={true}>
                  <div className='w-fit group mx-auto'>
                      <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#292c1c] transition-all duration-150'></div>
                          <button className='bg-[#f0e2db6c] text-slate-950 px-5 py-3 text-xl group-hover:tracking-[3px] transition-all duration-150'>OUR OFFER</button>
                      <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#1d1d1d] transition-all duration-150'></div>
                  </div>
                  </Link>
          </div>
        </div>
    </div>
    <Attributes/>
    </div>
  )
}

export default About