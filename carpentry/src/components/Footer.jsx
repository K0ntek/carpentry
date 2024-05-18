import React from 'react'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";

const Footer = () => {

    const socials =[
        {
            link:'',
            icon:<FaFacebookF />
        },
        {
            link:'',
            icon:<FaInstagram />
        },
        {
            link:'',
            icon:<FaTiktok />
        },
    ]

  return (
    <div className=' w-full'>
        <div className='bg-[#050505]'>
                <div className=' grid lg:grid-cols-3 bg-[#030303] py-2 space-y-10 lg:space-y-0'>
                    <div className=' space-y-5 group hover:bg-[#090909] py-3 transition-all duration-150'>
                            <div className=' space-y-[-50px]'>
                                <h1 className=' text-white font-[700] font-megrim text-6xl py-6 ml-[5%]'>Want to be <span className=' text-[#222513]'>up to date</span>?</h1>
                                <h1 className=' text-white font-[700] font-megrim text-6xl py-6 ml-[10%]'>get in <span className=' text-[#222513]'>touch</span>.</h1>
                            </div>
                    </div>

                    <div className=' text-white group space-y-2 hover:bg-[#090909] py-3 transition-all duration-150'>
                                <div className=' text-center w-full mx-auto space-y-3 mb-5'>
                                        <div className=' w-fit mx-auto mb-5'>
                                            <h1 className=' text-center font-[500] font-mont text-3xl text-white flex justify-center'><CiSquarePlus className=' mt-[2px] mr-1 text-[#222513]'/> FOLLOW US!</h1>
                                            <div className=' w-0 group-hover:w-full transition-all duration-150 h-[2px] bg-[#222513]'></div>
                                        </div>
                                            <div className=' justify-center flex space-x-3 text-2xl text-[#F0E2DB] z-[98]'>
                                                {socials.map((element, i)=>{
                                                    return(
                                                        <p key={i} className='hover:text-[#5d6341]'>{element.icon}</p>
                                                        )
                                                    })}
                                            </div>
                                </div>

                                    <div className=' w-fit mx-auto mb-5'>
                                        <h1 className=' text-center font-[500] font-mont text-3xl text-white flex justify-center'><CiSquarePlus className=' mt-[2px] mr-1 text-[#222513]'/> CONTACT US!</h1>
                                        <div className=' w-0 group-hover:w-full transition-all duration-150 h-[2px] bg-[#222513]'></div>
                                    </div>
                            <div>
                                <p className='flex text-lg justify-center text-[#dbdbdb] font-inter'><FaPhone className='mt-[6px] mr-2 text-[#222513]'/>000 0 000 000 0000</p>
                                <p className='flex text-lg justify-center text-[dbdbdb] font-inter'><MdEmail className='mt-[6px] mr-2 text-[#222513]'/> exmaple.email@gmail.com</p>
                            </div>
                    </div>

                    <div className='group hover:bg-[#090909] py-3 transition-all duration-150'>
                    <div className=' w-fit mx-auto mb-5'>
                        <h1 className=' text-center font-[500] font-mont text-3xl text-white flex justify-center'><CiSquarePlus className=' mt-[2px] mr-1 text-[#222513]'/> WHERE WE ARE.</h1>
                        <div className=' w-0 group-hover:w-full transition-all duration-150 h-[2px] bg-[#222513]'></div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7241865.800657484!2d-87.3027427861955!3d27.59144348322279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFloryda%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1716065791831!5m2!1spl!2spl" width="450" height="200" style={{border:0, margin:'auto'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <p className=' text-white font-inter text-center'>images taken from <span className='text-[#222513]'><a href="https://unsplash.com">unsplash</a></span></p>
                    </div>

                </div>
        </div>
        <div className=' bg-[#010101] py-3'>
            <p className=' text-white text-[11px] text-center'>©LOGO 2024, designed by <span className=' text-[#222513]'><a href="https://jakubkontekcv.onrender.com">JAKUB KONTEK</a></span></p>
        </div>
    </div>
  )
}

export default Footer