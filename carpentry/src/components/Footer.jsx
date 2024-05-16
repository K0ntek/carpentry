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
            <div className=' space-y-[-50px]'>
                <h1 className=' text-white font-[700] font-megrim text-6xl py-6 ml-[5%]'>Want to be <span className=' text-[#222513]'>up to date</span>?</h1>
                <h1 className=' text-white font-[700] font-megrim text-6xl py-6 ml-[10%]'>get in <span className=' text-[#222513]'>touch</span>.</h1>
            </div>
                <div className=' grid grid-cols-3 bg-[#030303] py-2'>
                    <div className=' space-y-5'>
                            <div className=' text-center w-full mx-auto space-y-3'>
                                <h1 className=' font-[200] font-mont text-3xl text-white flex justify-center'> <CiSquarePlus  className=' mt-[2px] mr-1 text-[#222513]'/> FOLLOW US!</h1>
                                <div className=' justify-center flex space-x-3 text-2xl text-[#F0E2DB] z-[98]'>
                                    {socials.map((element, i)=>{
                                        return(
                                            <p key={i} className='hover:text-[#5d6341]'>{element.icon}</p>
                                            )
                                        })}
                                </div>
                            </div>
                    </div>

                    <div className=' text-white space-y-2'>
                        <h1 className=' text-center font-[200] font-mont text-3xl text-white flex justify-center'><CiSquarePlus  className=' mt-[2px] mr-1 text-[#222513]'/> CONTACT US!</h1>
                        <div>
                            <p className='flex text-lg justify-center text-[#dbdbdb] font-inter'><FaPhone className='mt-[6px] mr-2 text-[#222513]'/>000 0 000 000 0000</p>
                            <p className='flex text-lg justify-center text-[dbdbdb] font-inter'><MdEmail className='mt-[6px] mr-2 text-[#222513]'/> exmaple.email@gmail.com</p>
                        </div>
                    </div>

                    <div>
                    <h1 className=' text-center font-[200] font-mont text-3xl text-white flex justify-center'><CiSquarePlus className=' mt-[2px] mr-1 text-[#222513]'/> WHERE WE ARE</h1>

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