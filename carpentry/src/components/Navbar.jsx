import React, { useEffect } from 'react'
import gsap from 'gsap/all'
import { Link } from 'react-scroll'

const Navbar = () => {
    const navElements=[
        {
            link:'home',
            name:'home'
        },
        {
            link:'about',
            name:'about'
        },
        {
            link:'offerWrapper',
            name:'offer'
        },
        {
            link:'projects',
            name:'projects'
        },
    ]

    useEffect(()=>{
        if (window.innerWidth > 500){
            gsap.fromTo('.navbar', {width: 50}, { width: 480, delay:.5})
            gsap.to('.navbar',{ width: 400, delay:1})
        }
        else{
            gsap.fromTo('.navbar', {width: 50}, { width: 400, delay:.5})
            gsap.to('.navbar',{ width: 350, delay:1})
        }
        gsap.fromTo('.navElement', {opacity:0}, {opacity:1, delay:1.5})
    },[])

  return (
    <div className=' navbar z-[99] fixed top-3 left-[50%] translate-x-[-50%] mx-auto bg-zinc-950 rounded-full text-white flex space-x-5 h-[64px] min-w-[64px] py-4 justify-center'>
        <h1 className='navElement text-2xl cursor-pointer'>LOGO</h1>
        <div className=''>
            <ul className=' flex space-x-2'>
                {navElements.map((navElement, i)=>{
                    return(
                       <Link to={navElement.link} spy={true} smooth={true}>
                        <div key={i} className='w-fit group'>
                            <li className='navElement cursor-pointer text-[#F0E2DB] px-2 py-1 hover:bg-white/10 rounded-full'>{navElement.name}</li>
                            {/* <div className=' w-0 group-hover:w-1/2 h-[1px] bg-[#F0E2DB] mx-auto transition-all duration-150'></div> */}
                        </div>
                       </Link>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Navbar