import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Attributes = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.title', { y: 200, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5, scrollTrigger: {
            trigger: '.wrapper',
            start: 'top 60%',
            end: 'top 20%',
            scrub: 2,
          },
        }
      );
    },[])
  return (
    <div className='wrapper'>
         <div className=' ml-[15%] overflow-hidden w-fit h-[170px]'>
            <h1 className=' font-mont text-[150px] font-[800] relative title'>PUNCTUALITY</h1>
         </div>

         <div className='ml-[10%] overflow-hidden w-fit h-[170px]'>
            <h1 className=' font-mont text-[150px] font-[300] relative title'>PRECISION</h1>
         </div>

        <div className=' ml-[40%] overflow-hidden w-fit h-[170px]'>
            <h1 className=' font-mont text-[150px] font-[600] relative title'>PASSION</h1>
        </div>
    </div>
  )
}

export default Attributes