import React, { useEffect } from 'react'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import gsap from 'gsap/all';
import { TimelineMax } from "gsap/gsap-core";

const Header = () => {
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

    useEffect(()=>{
        const tl = new TimelineMax({repeat: -1});
        tl.from(".bg", {backgroundPositionX: '0%'})
        .to(".bg", {backgroundPositionX: '100%', duration:30})
        .to(".bg", {backgroundPositionX:'0%', duration:30})

        gsap.fromTo('.line', {y: '100%'}, {y:0, stagger:1, duration:1})
        gsap.fromTo('.headerWrapper', {x: 400, opacity:0}, {x:0, opacity:1, duration:.5, stagger:.2})
        gsap.fromTo('.headerElement', {y: 100, opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2, delay:.8})
    },[])

  return (
    <>
    <div className=' grid grid-cols-[49.75%_0.5%_49.75%] z-[99] min-h-screen'>
          <div className='bg w-full h-screen bg-[url("https://images.unsplash.com/photo-1524169741802-fe62fbccd1a4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-[0%]'></div>
          <div className=' w-full h-full bg-black'></div>
          <div className='bg w-full h-screen bg-[url("https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-[00%]'></div>
       </div>
            <div className=' absolute top-[100px] lg:top-[15%] space-y-10 z-[98] w-full overflow-x-hidden'>

                <div className='headerWrapper flex mx-auto text-center justify-center font-megrim text-8xl md:text-9xl text-white space-x-6 md:space-x-10 ml-3'>
                    <div className="flex">
                        <h1 className=''>L</h1>
                        <h1 className=''>O</h1>
                    </div>
                    <div className="flex">
                        <h1 className=''>G</h1>
                        <h1 className=''>O</h1>      
                    </div>              
                </div>

                <div className='headerWrapper mx-auto justify-center w-[90%] lg:w-1/2 bg-black/50 p-10 space-y-5 rounded-lg overflow-hidden'>
                <h1 className='headerElement text-center text-5xl font-[200] text-white font-mont'>Our mission, your satisfaction</h1>
                    <p className='headerElement text-[#f1f1f1] text-2xl w-full md:w-4/5 mx-auto text-center'>Enjoy and be happy in your renovated house</p>
                
                    <div className='headerElement w-fit group mx-auto'>
                        <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#9b4722] transition-all duration-150'></div>
                    <button className='bg-black/30 px-5 py-3 text-white text-xl group-hover:tracking-[3px] transition-all duration-150'>CHECK OUT</button>
                        <div className=' mx-auto w-1/2 group-hover:w-4/5 h-[2px] bg-[#1d1d1d] transition-all duration-150'></div>
                    </div>

                </div>
            </div>

        <div className=' absolute bottom-[100px] left-2 space-y-3 text-lg text-[#F0E2DB] z-[98]'>
        {socials.map((element, i)=>{
            return(
                <p key={i} className='hover:text-slate-950'>{element.icon}</p>
                )
            })}
        </div>

        <div className='line w-[2px] h-3/4 bg-black absolute bottom-10 left-8 rounded-full'></div>
        <div className='line w-[2px] h-3/4 bg-black absolute top-10 right-8 rounded-full'></div>
    </>
  )
}

export default Header